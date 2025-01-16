exports.getAllTags = (req, res) => {
    res.json([{ id: 1, tag: 'bio' }, { id: 2, tag: 'sapin' }]);
};

exports.createTag = (req, res) => {
    const { tag } = req.body;
    res.status(201).json({ message: 'Tag créé', tag: { tag } });
};

exports.updateTag = (req, res) => {
    const { tag } = req.params;
    res.json({ message: `Tag modifié avec ${tag}` });
};

exports.deletetag = (req, res) => {
    const { tag } = req.params;
    res.json({ message: `tag ${tag} supprimé` });
};

exports.createTag = (req, res) => {
    const { tag } = req.body;
    res.status(201).json({ message: 'Tag créé', tag: { id: 3, tag } });
};