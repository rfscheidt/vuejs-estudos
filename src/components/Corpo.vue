<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Lista de produtos
        </h1>

        <p class="subheading font-weight-regular">
          Lista de produtos para o zeca
        </p>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-btn
              color="primary"
              dark
              @click="dialog = true"
            >
              Novo
            </v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="listaDeProdutos"
            :search="search"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
              >
              <span
              class="subheading font-weight-light text-success text--darken-3"
              v-text="header.text"
              />
              </template>
              <template
              slot="listaDeProdutos"
              slot-scope="{ item }"
              >
              <td>{{ item.name }}</td>
              <td>
              <v-icon left @click="openDialogChats(item.user)">mdi-message-reply-text</v-icon>
              <v-icon left @click="edit(item.id)">mdi-account-edit</v-icon>
              <v-icon left @click="remove(item.id)">mdi-account-remove</v-icon>
              <v-icon left @click="openDialogSendMessage(item.user)">mdi-arrow-top-right-bold-outline</v-icon>
              </td>
              </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Produto</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Codigo"
                  required
                  v-model="form.codigo"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  required
                  v-model="form.nome"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Tamanho"
                  required
                  v-model="form.tamanho"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>Cadastro e Edição</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="this.salvarProdutos"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
  import { ProdutoService } from '@/service/ProdutoService.js'

  export default {
    name: 'HelloWorld',

    data: () => ({
      search: '',
      dialog: false,
      listaDeProdutos: [],
      form: {
        codigo: '',
        nome: '',
        tamanho: ''
      },
      headers: [
          { text: 'Codigo', value: 'codigo' },
          { text: 'Nome', value: 'nome' },
          { text: 'tamanho', value: 'tamanho' },
          { text: 'Actions', value: 'actions', sortable: false }
        ]
    }),

    methods: {
      async listaProdutos() {
          let response = await ProdutoService.listaProdutos()
          this.listaDeProdutos = response.data
      },
      async salvarProdutos() {
        this.dialog = false
        ProdutoService.salvarProdutos(this.form)
        this.listaProdutos()
      },
      async deletarProdutos() {
        ProdutoService.deletarProdutos(this.form)
        this.listaProdutos()
      }
    },

    created () {
      this.listaProdutos()
    }

  }
</script>
