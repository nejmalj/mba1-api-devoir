exports.getAllMiels = (req, res) => {
    res.json([{ id: 1, nom: 'Miel d\'acacia', description: 'Acacia', prix: 12 }]);
};

exports.getMielById = (req, res) => {
    const { id } = req.params;
    res.json({ id, nom: 'Miel d\'acacia', description: 'Acacia', prix: 12 });
};

exports.createMiel = (req, res) => {
    const { nom, description, prix } = req.body;
    res.status(201).json({ message: 'Miel créé', miel: { nom, description, prix } });
};

exports.updateMiel = (req, res) => {
    const { id, prix } = req.params;
    res.json({ message: `Miel ${id}, nouveau prix ${prix}` });
};

exports.deleteMiel = (req, res) => {
    const { id } = req.params;
    res.json({ message: `Miel ${id} supprimé` });
};

