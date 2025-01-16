exports.getAllTags = (req, res) => {
    res.json([{ id: 1, tag: 'bio' }, { id: 2, tag: 'sapin' }]);
};

exports.getTagById = (req, res) => {
    const { id } = req.params;
    res.json({ id, tag });
};

exports.createTag = (req, res) => {
    const { tag } = req.body;
    res.json({ message: 'Tag créé', tag: { tag } });
};

exports.updateTag = (req, res) => {
    const { tag } = req.params;
    res.json({ message: `Tag modifié avec ${tag}` });
};

exports.deleteTag = (req, res) => {
    const { tag } = req.params;
    res.json({ message: `tag ${tag} supprimé` });
};

exports.createTag = (req, res) => {
    const { tag } = req.body;
    res.json({ message: 'Tag créé', tag: { id: 3, tag } });
};
