# Intro to Clean Coding

## Exercises

1. In your own words, explain what clean code is and why it is important.
    * Clean Code is a descriptor applied to code that utilizes and incorporates a variety of methods and techniques (such as DRY, Self-Documenting Code and Single Respondibility Principle) to improve readability, eliminate redundancy and simplify debugging/troubleshooting.
1. Read this article about Toyota and their use of bad code. Although you may not yet understand all of the topics discussed, think about another commonly used object that relies on computers and explain what would happen if the code was not created to an acceptable standard.
    * to help prevent accidental fires, modern space heaters rely on input from accelerometers to determine if the heater is upright or if it has fallen. If the code inside the heater's microcomputer could not accurately validate the input from the accelerometer, it could lead to operational faults, such as the heater not powering up when expected, unexpectedly shutting off during normal operation, or worse, remaining on after falling over and potentially causing user injury or a fire.
1. Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.
   * NO
     * function name doesn't correspond with what is being done
     * variable names in input and throughout function do not correspond to required values

    ```
    FUNCTION convertTemperature(value, scale)
        IF scale = "F" THEN
            SET convertedTemp to (value−32) * (5/9)
            PRINT convertedTemp
        ELSE IF scale = "C" THEN
            SET convertedTemp to value * 1.8000 + 32.00
            PRINT convertedTemp
        END IF
    END FUNCTION
    ```

1. Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.
    * NO
      1. function name represents what is being done but includes abbreviations
      1. pseudocode in IF statement is not terribly clear or human readable.

    ```
        FUNCTION calculatePercent(sum, total)
            IF total != 0 THEN
                SET percentage to sum / total * 100
            ELSE
                PRINT "Sorry, cannot divide by 0"
            END IF
            PRINT percentage
        END FUNCTION
    ```

1. Using pseudocode, refactor the code for the following examples using the principles you have learned in this checkpoint.

    a. The following function prints the subtotal of a customer's transaction and receives payment accordingly.

    ```
    FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
        SET total TO subTotal * discountRate + (subTotal * tax)

        PRINT "Your total due is: " + total

        IF paymentType = 'CASH' THEN
            CALL getPayment RETURNING amount
            PRINT "Change due: " + amount - total
        ELSE IF paymentType = 'CREDIT CARD' THEN
            CALL getPayment RETURNING amount
            PRINT "Your credit card has been charged: " + total
        END IF
    END FUNCTION
    ```

    b. The following function checks out a book if there are no issues with the guest's account.

    ```
    FUNCTION checkoutBook(book, guest)
      IF isEligible(guest) THEN
        APPEND book to guest.books
        SET book.status to "Checked Out"
        PRINT "Your book(s) have been issued."
      ELSE
        PRINT "Unable to check out book."
      END IF
    END FUNCTION

    FUNCTION isEligible(guest)
        IF NOT(guest.exists) THEN
            RETURN FALSE
        END IF

        IF guest.exists AND guest.accountActive AND NOT guest.hasOverdueBooks AND guest.outstandingFees = 0 THEN
            RETURN TRUE
        END IF
    END FUNCTION

    ```

    c. The following class is a code snippet that should support the transactions a customer can perform at an ATM.

    ```
    CLASS atm

        FUNCTION displayBalance
            PRINT balance
        END FUNCTION

        FUNCTION deposit(amount)
            SET balance to balance + amount
        END FUNCTION

        FUNCTION withdraw(amount)
            IF balance > amount THEN
            SET balance to balance - amount
            END
        END FUNCTION
    END CLASS

    CLASS customer
        FUNCTION creditCardOffer
            IF NOT(customer.hasCreditCard) THEN
                CALL offerCreditCard
            END
        END FUNCTION

        FUNCTION checkStatus
            IF NOT(customer.hasCheckingAccount) THEN
                CALL offerCheckingAccount
            END
        END FUNCTION

        ....
        ....
        ....
    END CLASS

    ```

## Programming Questions

You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

1. **Square** Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

``` Javascript
    function isSquare(numbers) {
       let sum = numbers.reduce((partialSum, i) => partialSum + i);
       let squareRoot = Math.sqrt(sum);

       if (squareRoot % 1 === 0) {
           return squareRoot
       } else {
           return sum
       }
    }
```

1. **Duplicate** Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

``` JavaScript
    function findDuplicates(numbers) {
        let sortedNumbers = numbers.sort((a,b) => a - b);
        let duplicates = []
        for (let i = 0; i < sortedNumbers.length - 1; i++) {
            if (sortedNumbers[i + 1] === sortedNumbers[i]) {
                duplicates.push(sortedNumbers[i])
            }
        }
        if (duplicates.length > 0) {
             return true
        }
        return false
    }

```