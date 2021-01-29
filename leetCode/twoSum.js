
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var nums = [2, 7, 11, 15]
var twoSum = function(nums, target) {
    var newS = []
    // var anotherN = ''
    for(var i=0;i< nums.length;i++){       
        var anotherN = target - nums[i];

        for(var j=0;j< nums.length;j++){
            if(i==j){
                continue;
                }
            else{
                // console.log(j)
                if (nums[j]==anotherN){ 
                    console.log('匹配完成')                                
                    newS = [i,j];
                    // break;
                }
            }           
        }
        if(newS!=''){

            return newS
            break;
        }

        // for(var j=0; i<nums.length; i++){
        //     if(i===j){
        //         continue;
        //     }
        //     else{
        //         if(target === nums[i]+nums[j]){
        //             newS = [j,i];
        //             break;
        //         }
        //     }
        // }
       
    // return newS       
    }

    
};

var nums = [2, 7, 11, 15]
twoSum(nums,9)