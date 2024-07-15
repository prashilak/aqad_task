import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'usersDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  }
);
// user signup details table
export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, Email TEXT, CreatedAt TEXT);'
    );
  });
};

export const insertUser = (email, createdAt) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO Users (Email, CreatedAt) VALUES (?, ?)', [email, createdAt]);
  });
};

export const getUsers = (setUsers) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Users', [], (tx, results) => {
      const rows = results.rows;
      let users = [];

      for (let i = 0; i < rows.length; i++) {
        users.push({
          id: rows.item(i).ID,
          email: rows.item(i).Email,
          createdAt: rows.item(i).CreatedAt,
        });
      }

      setUsers(users);
    });
  });
};

// contact details table

export const createTableContacts = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Contacts (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, Mobile TEXT, CreatedAt TEXT);'
    );
  });
};

export const insertContacts = (name, email, mobile, createdAt) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO Contacts (Name, Email, Mobile, CreatedAt) VALUES (?, ?, ?, ?)', [name, email, mobile, createdAt]);
  });
};

export const getContacts = (setContactList) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Contacts', [], (tx, results) => {
      const rows = results.rows;
      let contacts = [];

      for (let i = 0; i < rows.length; i++) {
        contacts.push({
          id: rows.item(i).ID,
          name: rows.item(i).Name,
          email: rows.item(i).Email,
          mobile: rows.item(i).Mobile,
          createdAt: rows.item(i).CreatedAt,
        });
      }

      setContactList(contacts);
    });
  });
};

export const updateContact = (id, name, email, mobile) => {
  db.transaction(tx => {
    tx.executeSql('UPDATE Contacts SET Name = ?, Email = ?, Mobile = ? WHERE ID = ?', [name, email, mobile, id],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log(`Contact with ID: ${id} updated successfully.`);
        } else {
          console.log(`No Contact found with ID: ${id}.`);
        }
      },
      error => {
        console.log('Error updating Contact: ', error);
      }
    );
  });
};

export const deleteContact = (id) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM Contacts WHERE ID = ?', [id],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log(`Contact with ID: ${id} deleted successfully.`);
        } else {
          console.log(`No user found with ID: ${id}.`);
        }
      },
      error => {
        console.log('Error deleting user: ', error);
      }
    );
  });
};

