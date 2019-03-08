# Sorting Algorithms

1. Write pseudocode for *bubble sort*.

   ```
   SET i to 0
    FOR i INCREMENTING to length of array
        SET swapped to FALSE
        SET j TO 0
        FOR j INCREMENTING to length of array
            IF array[j] > array[j+1] THEN
                SWAP array[j] WITH array[j+1]
                SET swapped to TRUE
            END IF
        END FOR

        IF swapped is TRUE THEN
            break loop
        END IF
    END FOR
   ```

1. Write pseudocode for *quicksort*

    ```
    FUNCTION quickSort WITH INPUT array
    SET last element in array AS pivot
    SET empty array AS left
    SET empty array AS right
    set empty array AS sortedArray
    FOR EACH element IN array NOT including pivot
        IF element <= pivot
            ADD element to array left
        ELSE
            ADD element to array right
        END IF
    END FOR

    CONCATENATE quickSort(Left) + pivot + quickSort(Right)
    ```

1. We talked about time complexity in a previous checkpoint, and how to get an idea of the effiiency of an algorithm. After looking at the pseudocode for the above sorting methods, identify why merge sort and quicksort are much more efficient than the others. Walking through each algorithm with a few sample collections may help.
   * Bubble, selection and insertion sorting all iterate through the arrays and place each item in its correct place, one at a time. Quick sort and merge sort make use of recursion and helper functions to "divide and conquer" the array into smaller subsets and sorting as the data is grouped together. This may not be the most efficient approach for smaller sets of data, but they quickly outperform other algorithms as our pool of data grows.
1. All of the sorts addressed in this checkpoint are known as comparison sorts. Research bucket sort and explain how it works. What is the ideal input for bucket sort?
   * bucket sort is considered a *distribution sort* algorithm. With Bucket sort, for an array of *n* elements, we create *n* arrays - our buckets. We then iterate through our original array and take each element and assign it to a corresponding bucket based on some grouping parameter (0-9, 10-19, etc.). Each non-empty bucket is then sorted either by using another sorting algorithm, or recursively until all the data is in a "sorted" array of 1. Then we examine all of our buckets in order and place the elements back into the original array.
   * ideal input requires values to be uniformly distributed over a range.