<template>

    <div class="table_wrapper">
        <h2 class="title is-2" >Nearest patients list</h2>
        <section>
            <b-table
                    :striped="true"
                    :hoverable="true"
                    class="table"
                    :data="this.users.length > 0 ? this.users : []"
                    :columns="columns">
            </b-table>
        </section>
    </div>
</template>

<script>
  export default {
    name: "UsersTable",
    props:["users"],
    data() {
      return {
        columns: [
          {
            field: 'firstName',
            label: 'First Name',
            searchable: true,
          },
          {
            field: 'lastName',
            label: 'Last Name',
            searchable: true,
          },
          {
            field: 'birthday',
            label: 'Years old/Birthday',
            centered: true
          },
          {
            field: 'temperature',
            label: 'Temperature',
            centered: true
          }
        ]
      }
    },
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