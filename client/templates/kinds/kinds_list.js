var kindsData = [
 {
 name: 'Tectonic',
 elements: ['Earth', 'Nature', 'Water'],
 },
 {
 name: 'Lava',
 elements: ['Earth', 'Fire'],
 },
 {
 name: 'Tropical',
 elements: ['Fire', 'Nature'],
 }
];
Template.kindsList.helpers({
 kinds: kindsData
});