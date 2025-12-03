@todo-app
Feature: Agregar una nueva tarea
  Como gerente de proyectos
  quiero agregar una tarea a mi lista de pendientes
  para poder hacerle seguimiento

  Scenario: El usuario agrega una tarea
    Given el usuario está en la página de pendientes
    When ingresa "Buy groceries" como el título de una tarea
    And da click en el botón agregar tarea
    Then la tarea debe aparecer en la lista

  Scenario: El usuario agrega una tarea sin título
    Given el usuario está en la página de pendientes
    When ingresa una tarea sin título
    And da click en el botón agregar tarea
    Then debe ver un mensaje de error
