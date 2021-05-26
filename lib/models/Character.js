const pool = require('../utils/pool'); 

module.exports = class Character {
    id;
    photoUrl; 
    name;
    // gender;
    // eye;
    // hair;
    // skin;
    // love;
    // allies;
    // enemies;
    // weapon;
    // profession;
    // predecessor;
    // affiliation; 
    // first; 
    voicedBy; 

    constructor(row){
      this.id = row.id; 
      this.photoUrl = row.photo_url; 
      this.name = row.name;

      this.voicedBy = row.voiced_by; 
    }

    static async insert(character) {
      const { rows } = await pool.query('INSERT into characters (photo_url, name, voiced_by) VALUES ($1, $2, $3) RETURNING *', 
        [character.photoUrl, character.name, character.voicedBy]); 
        
      return new Character(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM characters'
      );
    
      return rows.map(row => new Character(row));
    }
  
    static async findById(id) {
      const { rows } = await pool.query(
        'SELECT * FROM characters WHERE id=$1',
        [id]
      );
    
      if(!rows[0]) throw new Error(`Character with id ${id} not found`);
      else return new Character(rows[0]);
    }
  
    static async update(id, character) {
      const { rows } = await pool.query(
        `UPDATE characters
           SET photo_url=$1,
               name=$2,
               voiced_by=$3
           WHERE id=$4
           RETURNING *
          `,
        [character.photoUrl, character.name, character.voicedBy, id]
      );
    
      if(!rows[0]) throw new Error(`Character with id ${id} not found`);
      else return new Character(rows[0]);
    }
  
    static async delete(id) {
      const { rows } = await pool.query(
        'DELETE FROM characters WHERE id=$1 RETURNING *',
        [id]
      );
    
      if(!rows[0]) throw new Error(`Character with id ${id} not found`);
      else return new Character(rows[0]);
    }
};
