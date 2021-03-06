const bcrypt = require('bcryptjs');

const saltRounds = 10;

const generateEncryptedPassword = async password => {
    const salt = await bcrypt.genSalt(saltRounds);

    const encryptedPassword = bcrypt.hashSync(password, salt);

    return encryptedPassword;
};

const verifyPassword = async (passwordForm, passwordDb) => {
    return bcrypt.compareSync(passwordForm, passwordDb);
};

module.exports = {generateEncryptedPassword, verifyPassword};
