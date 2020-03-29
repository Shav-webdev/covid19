<template>

    <div class="table_wrapper">
        <h2 class="title is-2" >Nearest patients list</h2>
        <section>
            <b-table
                    class="table"
                    :data="data"
                    :columns="columns">
            </b-table>
        </section>
    </div>
</template>

<script>
    import getUsers from "../services"
  export default {
    name: "UsersTable",
    data() {
      return {
        data: [
          { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
          { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
          { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
          { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
          { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
        ],
        columns: [
          {
            field: 'id',
            label: 'ID',
            width: '100',
            numeric: true,
            searchable: true,
          },
          {
            field: 'first_name',
            label: 'First Name',
            searchable: true,
          },
          {
            field: 'last_name',
            label: 'Last Name',
            searchable: true,
          },
          {
            field: 'date',
            label: 'Date',
            centered: true
          },
          {
            field: 'temperature',
            label: 'Temperature',
          }
        ]
      }
    },
    beforeCreate() {
        getUsers()
    }
  };
</script>

<style scoped>
    .table_wrapper {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        overflow-x: scroll;
    }
    .table {
        max-width: 800px;
    }
</style>