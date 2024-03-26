exports.up = (knex) =>
  knex.schema.createTable("payments", (table) => {
    table.increments("id");
    table.text("status").notNullable();
    table.text("plates").notNullable();
    table.integer("price");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("payments");
