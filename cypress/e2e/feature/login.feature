Feature: Login
    Eu como cliente 
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login com campo e-mail vazio
        Given I am on login screen
        When I click on login
        Then I see the message "E-mail inválido"

    # Scenario: Login com campo senha vazio
    #     Given I am on login screen
    #     And I fill my email
    #     When I click on login
    #     Then I see the message "Senha Inválida"

    # Scenario: Login com sucesso
    #     Given I am on login screen
    #     And I fill my credentials 
    #     When I click on login
    #     Then I see the message "E-mail inválido"