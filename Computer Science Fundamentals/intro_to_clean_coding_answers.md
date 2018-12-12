# Intro to Clean Coding

## Exercises

1. In your own words, explain what clean code is and why it is important.
    * Clean Code is a descriptor applied to code that utilizes and incorporates a variety of methods and techniques (such as DRY, Self-Documenting Code and Single Respondibility Principle) to improve readability, eliminate redundancy and simplify debugging/troubleshooting.
2. Read this article about Toyota and their use of bad code. Although you may not yet understand all of the topics discussed, think about another commonly used object that relies on computers and explain what would happen if the code was not created to an acceptable standard.

3. Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.

4. Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.

5. Using pseudocode, refactor the code for the following examples using the principles you have learned in this checkpoint.

    a. The following function prints the subtotal of a customer's transaction and receives payment accordingly.
   
```

    FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
   PRINT "Your total due is: " + subTotal * discountRate + (subTotal * tax)

   IF paymentType = 'CASH' THEN
       CALL getPayment RETURNING amount
       PRINT "Change due: " + amount - subTotal * discountRate + (subTotal * tax)
   ELSE IF paymentType = 'CREDIT CARD' THEN
       CALL getPayment RETURNING amount
       PRINT "Your credit card has been charged: " + subTotal * discountRate + (subTotal * tax)
   END IF
END FUNCTION

```

b. b. The following function checks out a book if there are no issues with the guest's account.

```
FUNCTION checkoutBook(book, guest)
 IF guest.accountActive THEN
     IF NOT(guest.hasOverdueBooks) THEN
         IF guest.outstandingFees = 0 THEN
           APPEND book to guest.books
           SET book.status to "Checked Out"
           PRINT "Your books have been issued."
         END IF
     END IF
 ELSE
     PRINT "Unable to check out book."
 END IF
END FUNCTION
```

c. The following class is a code snippet that should support the transactions a customer can perform at an ATM.
```
CLASS BankAccount

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

END
```
## Programming Questions 
You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

6. **Square** Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

```
Example:
[10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
[1,1] returns 2 because 2 is not a perfect square.
The square root of 2 is approximately 1.414213562373095.
```
7. **Duplicate** Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

## Extra Credit

1. **Anagram** An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. **Hint**: Your first task will be to convert the strings to arrays.