angular.module('nutrition_content', [])
    .controller('nutritioncontroller', function($scope, $http) {
        $scope.getNutritionDetails = function() {
            var food = $scope.food;

            $http.get('http://api.edamam.com/api/nutrition-data?app_id=cd8aeca4&app_key=fc2d0b6896b903c686cb8050d5171911&ingr="'+food+'"').success(function(data) {
                alert("Entered");
                console.log(data);
                calories = data.calories;
                totalWeight = data.totalWeight;

                console.log(calories);
                console.log(totalWeight)

                var msg = new SpeechSynthesisUtterance(food);
                window.speechSynthesis.speak(msg);
                $scope.foodcontents = {
                    html:" calories "   + calories + " Kcal " + " weight " +totalWeight+ "g"
                }

            })
        }



        $scope.getVoice = function() {
            var food = $scope.food;
            var htmlCode = '<audio controls="controls"><source src="http://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=78486ba7-22d8-4124-b5a7-9de01be7cdff&password=X81KxiikcbCS&text=' +food + '" type="audio/ogg"></audio>'
            console.log(htmlCode)
            document.write(htmlCode);
        }
    });



