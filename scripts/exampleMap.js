exampleNamespace.exampleMap_drawPixel = function() {
    // Draw spore background
    c1 = Color.mix(Color.parse("#7c4b80"), Color.parse("#6b4474"), Math.sin(state.time) / 2 + 0.5);
    c2 = Color.mix(Color.parse("#7c4b80"), Color.parse("#6b4474"), Math.cos(state.time) / 2 + 0.5);
    drawStripes(c1, c2);
    drawBeatSquare(Color.parse("#f25555"));
    
    // Draw space
    c3 = Color(0, 0, 0, 0);
    if(state.turn >= 24 && state.turn < 32) {
        progress = (state.turn - 24) / 8;
        c3 = Color.mix(Color.parse("#00000000"), Color.parse("#ff00007f"), progress);
        drawSpace(c3);
    }
    else if(state.turn >= 32) {
        c3 = Color.mix(Color.parse("#ff00007f"), Color.parse("#ffff007f"), Math.pow(state.moveBeat, 2));
        drawSpace(c3);
    }
    
    // Draw spore storm
    drawFlame(Color.parse("#7457ce"), Color.parse("#7457ce"), state.time);

    // Draw Crux symbol
    drawShape([new Vec2(0, 2.8), new Vec2(0.7, 2.1), new Vec2(0.7, 2.8), new Vec2(1.5, 2), new Vec2(1.5, 1.3), new Vec2(1.9, 0.9), new Vec2(0, -1), new Vec2(-0.3, -0.7), new Vec2(-0.3, 0), new Vec2(-1.1, 0.8), new Vec2(-1.1, 0.1), new Vec2(-1.9, 0.9)],
        true, px(1), Color.red);
    drawShape([new Vec2(0, -2), new Vec2(2.4, 0.4), new Vec2(2.4, -0.4), new Vec2(0, -2.8), new Vec2(-1, -1.8), new Vec2(-1, -2.7), new Vec2(-1.8, -1.9), new Vec2(-1.8, -1), new Vec2(-2.4, -0.4), new Vec2(-2.4, 0.4)],
        true, px(1), Color.red);
};

exampleNamespace.exampleMap_draw = function() {
    col1 = Color.white;
    if(state.turn % 4 == 3) {
        col1 = Color.mix(Color.white, Color.black, state.moveBeat);
    }
    col2 = {};
    switch(state.turn % 4) {
        case 0: col2 = Color.red;      break;
        case 1: col2 = Color.green;    break;
        case 2: col2 = Color.blue;     break;
        case 3: col2 = Color.white;    break;
    }
    drawTilesSquare(col1, col2);
};

exampleNamespace.exampleMap_update = function() {
    if(state.newTurn) {
        if(state.turn >= 4 && state.turn < 4 + mapSize * 2) {
            effectWarn(new Vec2(state.turn - 4 - mapSize, -mapSize), state.beatSpacing);
            
            makeDelay(1, function() {
                makeBulletCircle(new Vec2(state.turn - 4 - mapSize, 0));
            });
        }
        if(state.turn >= 24 && state.turn < 48 && state.turn % 8 == 0) {
            makeCustomEntity(new Vec2(-2, 3), exampleNamespace.exampleEntity, 22, false, true, false);
        }
        if(state.turn >= 24 && state.turn < 48 && state.turn % 8 == 0) {
            makeCustomEntity(new Vec2(-3, 6), exampleNamespace.exampleEntity, 22, false, true, false);
        }
    }
};