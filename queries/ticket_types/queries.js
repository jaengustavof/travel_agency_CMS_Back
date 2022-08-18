const { sql } = require("slonik");

const selectAllTypes = () =>{
    return sql `
        SELECT * FROM ticket_types
    `
}

const selectOneType = ({ticket_type_name}) => {
    return sql `
        SELECT * FROM ticket_types
        WHERE ticket_type_name = ${ticket_type_name}
    `
}

const createOneType = ({ticket_type_name}) => {
    return sql `
        INSERT INTO ticket_types (ticket_type_name)
        VALUES (${ticket_type_name})
    `
}

const selectOneId = ({ticket_type_id}) => {
    return sql `
        SELECT * FROM ticket_types
        WHERE ticket_type_id = ${ticket_type_id}
    `
}

const updateOneType = ({ticket_type_id, ticket_type_name}) => {
    return sql `
        UPDATE ticket_types
        SET ticket_type_name = ${ticket_type_name}
        WHERE ticket_type_id = ${ticket_type_id}
    `
}

const removeOneType = ({ticket_type_id}) =>{
    return sql `
        DELETE FROM ticket_types
        WHERE ticket_type_id = ${ticket_type_id}
    `
}



module.exports = {
    selectAllTypes,
    selectOneType,
    createOneType,
    selectOneId,
    updateOneType,
    removeOneType

}