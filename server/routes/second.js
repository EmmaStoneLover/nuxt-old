import indexModel from "../models/home.js"

function Alert(strong = "Alert", msg = "", how = "warning") {
  return { strong: strong, msg: msg, how: how }
}

const Second = {
  Get: async function indexGET(req, res) {
    const DB = await indexModel.find().lean()
    const data = {
      DB: DB,
    }
    res.status(200).json(data)
  },

  GetId: async (req, res) => {
    try {
      const id = req.params.id
      const DB = await indexModel.find({ _id: id }).lean()
      res.status(200).json(DB)
    } catch (err) {
      console.log("Не получилось отправить текст:", err)
    }
  },

  Post: async (req, res) => {
    try {
      const msg = new indexModel({
        text: req.body.text,
        changed: req.body.changed,
      });
      await msg.save()
      const DB = await indexModel.find().lean()
      const data = {
        DB: DB,
        alert: Alert("ОК", "Спасибо что вставил текст", "warning"),
      }
      console.log("Удалено:", del)
      res.status(201).json(data)
    } catch (err) {
      console.log("Не получилось добавить текст:", err)
    }
  },

  Delete: async (req, res) => {
    try {
      const id = req.params.id
      const deleted = await indexModel.find({ _id: id })
      var del = deleted[0].text
      if (del.length > 7) {
        del = del.substr(0, 7) + "..."
      }
      console.log("Удалено:", del)
      await indexModel.deleteOne({ _id: id })
      const DB = await indexModel.find().lean()
      const data = {
        deleted: true,
        alert: Alert("Удалено:", del, "danger"),
      };
      res.status(201).json(data)
    } catch (err) {
      const data = {
        deleted: false,
        alert: Alert("Error:", "не удалилось", "danger"),
      }
      console.log("Не получилось удалить:", err)
    }
  },
}

export default Second
