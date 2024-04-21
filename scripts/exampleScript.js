// {
//     "name": "Example",
//     "parameters": [
//         {"name": "col1", "default": "colorWhite"},
//         {"name": "col2", "default": "colorWhite"},
//         {"name": "time", "default": "state_time"}
//     ],
//     "script": [
//         {"type": "SetFloat", "name": "iter", "value": "0.0"},
//         {"type": "Background", "col": "abcdef"},
//         {"type": "DrawBloom", "body": [
//             {"type": "Repeat", "condition": "iter < 10", "body": [
//                 {"type": "DrawTriSquare", "pos": "vec2(iter - 5, 0) * 2", "col": "col1", "len": 0.6, "rad": 0.2, "amount": "iter + 3", "offset": "rad(time * 45 + iter * 15)", "shapeOffset": "rad(180)"},
//                 {"type": "Condition", "condition":"iter == 4", "then": [
//                     {"type": "Break"}
//                 ]},
//                 {"type": "SetFloat", "name": "iter", "value": "iter + 1"}
//             ]}
//         ]},
//         {"type": "Iterate", "iterator": "iter", "startValue": -5, "endValue": 5, "body": [
//             {"type": "DrawRoundLine", "pos": "vec2(iter, 0) * 2", "angle": "rad(time * 45 + iter + 5 * 15)", "len": "-iter * 0.1 + 0.1", "color": "col2", "stroke": 0.1},
//             {"type": "Condition", "condition":"iter == 0", "then": [
//                 {"type": "Return"}
//             ]}
//         ]},
//         {"type": "DrawVertGradient", "col1": "00ff00", "col2": "0000ff00"}
//     ]
// }

// exampleNamespace.exampleFunction = function(col1 = colorWhite, col2 = colorWhite, time = state_time) {
//     background(Color.parse("#abcdef"));
//     beginBloom();
//     for(i = 0; i < 10; i++) {
//         drawTriSquare(new Vec2((i - 5) * 2, 0), col1, 0.6, rad(0.2), i + 3, rad(time * 45 + i * 15), rad(180));
//     }
// };