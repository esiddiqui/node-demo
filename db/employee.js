
/**
 * Employee repository
 */
module.exports = {
    /**
     * Find all employees
     * @param {*} db 
     * @param {*} callback 
     */
    findAll: function (db, callback) {
        db.collection('employee').find().toArray(callback);
    },

}