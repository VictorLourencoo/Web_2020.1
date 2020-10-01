export default class FirebaseService {

  static list = (firestore, callback) => {

    let ref = firestore.collection('disciplina')
    ref.onSnapshot((query) => {
      let disciplina = []

      query.forEach((doc) => {
        const { nome, curso, capacidade } = doc.data()
        disciplina.push({
          _id: doc.id,
          nome,
          curso,
          capacidade
        })
      })
      callback(disciplina)
    })

  }

  static delete = (firestore, callback, id) => {

    firestore.collection('disciplina').doc(id).delete()
      .then(
        () => {
          callback('ok')
        }
      )
      .catch(
        (error) => {
          callback('error')
        }
      )
  }

  static create = (firestore, callback, disciplina) => {

    firestore.collection('disciplina').add(
      {
        nome: disciplina.nome,
        curso: disciplina.curso,
        capacidade: disciplina.capacidade
      }
    )
      .then(
        () => {
          callback('ok')
        }
      )
      .catch(
        (error) => {
          callback('error')
        }
      )
  }

  static retrieve = (firestore, callback, id) => {

    firestore.collection('discuplina').doc(id).get()
      .then((doc) => {
        const disciplina = {
          nome: doc.data().nome,
          curso: doc.data().curso,
          capacidade: doc.data().capacidade
        }
        callback(disciplina)
      })
      .catch(error => callback(null))

  }

  static edit = (firestore, callback, id, disciplina) => {

    firestore.collection('disciplina').doc(id).set({
      nome: disciplina.nome,
      curso: disciplina.curso,
      capacidade: disciplina.capacidade
    })
      .then(() => {
        callback('ok')
      })
      .catch(() => {
        callback('error')
      });
  }
}