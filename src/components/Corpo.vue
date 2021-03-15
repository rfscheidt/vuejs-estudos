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
          ></v-data-table>
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
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Nome"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Tamanho"
                  required
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
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
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
      headers: [
          { text: 'Codigo', value: 'codigo' },
          { text: 'Nome', value: 'nome' },
          { text: 'tamanho', value: 'tamanho' }
        ]
    }),

    methods: {
      async listaProdutos() {
          let response = await ProdutoService.carregarProduto()
         this.listaDeProdutos = response.data
      }
    },

    created () {
      this.listaProdutos()
    }

  }
</script>
