# Algorithms

1. Using proper pseudocode, describe the following primitive algorithms:
    * Making coffee -

      ```
      FUNCTION prepareCoffee(water, coffee beans)
          Call weighCoffee with input "coffee beans" returning TRUE if amount is sufficient
          Call grindCoffee with input "coffee beans" returning "coffee grinds"

          SET filter to TRUE

          IF filter = true AND "coffee grinds" THEN
              call brewCoffee(water, filter, coffee grinds) returning "Cup of Coffee"
          END IF
      END FUNCTION
      ```

    * Washing dishes

      ```
      FUNCTION washDishes(dirty dishes, soap, sponge)
        CALL turnOnFaucet() returning "lukewarm water"
        COMPUTE soapySponge to "lukewarm water" + soap + sponge

        SET dryingRack to []
        FOR each dish IN dirty dishes
          call scrubDish(dish, soapySponge) returning cleanDish
          PUSH cleanDish to dryingRack
        END FOR
      END FUNCTION
      ```

    * A choice of your own - filling up your car with gas

      ```
      FUNCTION fillGasTank(car, "payment method")
          CALL drive() with input Gas Station returning "arrived"

          IF gas = 0 THEN
              CALL pushCar() with input Unoccupied Gas Pump returning "arrived"
          ELSE
              CALL drive() with input Unoccupied Gas Pump
          END IF

          SET gasCap = false
          FOR gas = 0 TO 100
              call pumpGas()
              INCREMENT gas
          END FOR

          IF gas = 100
              SET gasCap = true
          END IF

          CALL drive() with input home
      END FUNCTION
     ```

1. As with the knot algoritm, there may be more than one way to solve the problem. It is essential to try to pick the best algorithm for a situation. Name three companies who created an algorithm that made them successful, e.g. Google's search algoritm. It doesn't need to be a tech example (such as a recipe or manufacturing a product). Google's algorithm produces more relevant results than other search engines; what about each of your cases make them stand out?
   1. P. Duff and Sons, Cake Mix: In 1930, due to a surplus of molasses, owner invents a method to dehydrate molasses and add it to a flour mix, simplifying and reducing the steps involved and allowing consumers to make a cake by just adding water and eggs to the mix.
   1. Glucose Meters, Bayer and Roche, 1980s: home glucose monitoring was shown to improve control of type 1 diabetes in the late 70s, with the first meters marketed for home use by 1981. The introduction of these meters to the market allowed patients to monitor their levels with sufficient accuracy and readiness to control their symptoms without needing to rely on infrequent lab tests.
   1. Instant Coffee, Nestle, late 1930s: In 1930, The Brazillian coffee institute asks the chairman of Nestle to create a soluble coffee product that will help with dealing with coffee surpluses and stagnating sales. By 1938, Nescafe is sold and becomes popular very quickly, particularly with soldiers fighting in WWII.
1. Hypothesize about what constitutes an efficient algorithm versus an inefficient algorithm.
   * assuming an algorithm is 100% effective at solving a problem, the efficiency of an algorithm would be determined as a measure of how much time or resources are required to reach a solution. Also worth noting that concluding whether an algorithm is or is not effective is dependent on the complexity of the problem being solved and an algorithm's performance compared to other prior or future alternativecs.