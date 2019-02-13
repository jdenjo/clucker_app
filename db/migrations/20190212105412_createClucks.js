//creates the cluckr tables
exports.up = function(knex, Promise) {
        return knex.schema.createTable('clucks', table => {
            table.increments('id'); // create an autoincrementing column named `id`
            table.string('username'); 
            table.string('image_url');
            table.text('content');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
    };
    
    // The `down` function is what is run when we rollback our migration
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('clucks');
    };