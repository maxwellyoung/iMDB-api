
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    {id: 1, album: 'Riderless Horse', artist: 'Nina Nastasia', year: '2022'},
    {id: 2, album: 'Aurora Boreal', artist: 'Señor Kino', year: '2021'},
    {id: 3, album: 'A Light For Attracting Attention', artist: 'The Smile', year: '2022'},
    {id: 4, album: 'Liquid Swords', artist: 'GZA', year: '1995'},
    {id: 5, album: 'Look Blue Go Purple Compilation', artist: 'Look Blue Go Purle', year: '1991'}
    
  ]);
};
