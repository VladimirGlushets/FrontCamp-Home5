db = db.getSiblingDB('grades');

var bestClass = db.gradesName.aggregate([
    { 
        $project: {
        _id: 0,
        class_id: "$class_id",
        scores : {
            $filter: {
                input: "$scores",
                as: "fscores",
                cond: {
                    $ne: ["$$fscores.type", "quiz"]
                }
            }
           }
       }       
    },
    {  
        $unwind: "$scores"
    },
    {
        $group: { _id: "$class_id", avg: {$avg: "$scores.score"} }
    },
    {
        $sort: { avg : -1 }
    },
    {
        $limit: 1
    }  
]).next();

printjson(bestClass);
