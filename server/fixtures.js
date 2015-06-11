if (Kinds.find().count() === 0) {
    Kinds.insert({
        name: 'Tectonic',
        elements: ['Earth', 'Nature', 'Water'],
    });
    Kinds.insert({
        name: 'Lava',
        elements: ['Earth', 'Fire'],
    });
    Kinds.insert({
        name: 'Tropical',
        elements: ['Fire', 'Nature'],
    });
}