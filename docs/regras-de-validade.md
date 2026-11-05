# RN01 – Alertas de Validade dos Produtos

Este documento descreve a regra de negócio para a atribuição automática de cores aos produtos do sistema com base na sua data de vencimento. O objetivo deste sistema de alertas visual é facilitar a gestão de estoque e prevenir perdas.

---

## 📊 Tabela de Referência de Cores

| Cor do Alerta | Critério de Vencimento | Nível de Urgência | Ação Recomendada |
| :---: | --- | :---: | --- |
| **🔴 Vermelho** | Menos de 3 meses para o vencimento | **Crítico** | Priorizar saída imediata / Promoção |
| **🟡 Amarelo** | Entre 3 e 6 meses para o vencimento | **Moderado** | Monitorar estoque e planejar ações |
| **🟢 Verde** | Entre 6 meses e 1 ano para o vencimento | **Normal** | Fluxo de vendas regular |
| **⚪ Branco** | Superior a 1 ano para o vencimento | **Estável** | Armazenamento seguro a longo prazo |

---

## 🔍 Detalhamento dos Status

### 🔴 Alerta Vermelho (Vencimento < 3 meses)
*   **Critério:** A data de vencimento do produto está a menos de 90 dias da data atual.
*   **Impacto:** Risco alto de perda de mercadoria.
*   **Ação do Sistema:** Destacar o produto nas primeiras posições de relatórios de validade e emitir alertas de urgência no painel do usuário.

### 🟡 Alerta Amarelo (Vencimento entre 3 e 6 meses)
*   **Critério:** O produto vencerá em um período maior ou igual a 3 meses e menor que 6 meses.
*   **Impacto:** Atenção preventiva necessária.
*   **Ação do Sistema:** Exibir sinalização de alerta moderado para planejamento de marketing ou rotação de estoque (PEPS - Primeiro que Entra, Primeiro que Sai).

### 🟢 Alerta Verde (Vencimento entre 6 meses e 1 ano)
*   **Critério:** O produto vencerá em um período maior ou igual a 6 meses e menor ou igual a 1 ano.
*   **Impacto:** Produto em situação segura e comercialização padrão.

### ⚪ Alerta Branco (Vencimento > 1 ano)
*   **Critério:** A data de vencimento é superior a 365 dias a partir da data atual.
*   **Impacto:** Estoque novo ou de longa vida útil. Nenhuma ação imediata é requerida.