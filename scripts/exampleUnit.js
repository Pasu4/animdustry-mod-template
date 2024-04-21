exampleNamespace.exampleUnit_draw = function(basePos) {
    function rad(deg) {
        return deg / 180 * Math.PI;
    }

    // Draw background
    light = Color.parse("#b25840");
    drawStripes(light, Color.parse("#c07659"));
    // log(Color.accent.r);
    drawVertGradient(Color.accent);
    drawFillPoly(basePos, 5, 3.5, rad(-90), Color.accent);
    drawPoly(basePos, 5, 5.5, rad(-90), 1.0, Color.accent);
    drawVertGradient(Color.parse("#c076595a"), Color.parse("#c0765900"));
    // exampleFunction(Color.heal, Color.accent, fau_time * 5);
    pos = Vec2.add(Vec2.sub(basePos, new Vec2(0, 0.5)), Vec2.scale(hoverOffset(), 0.5));

    // Draw shadow of unit
    drawUnit(Vec2.sub(pos, shadowOffset), getScl(0.165), Color.shadow);

    // Draw squares with bloom
    beginBloom();
    drawSquares(Color.accent, state.globalTime, 80, 2);
    endBloom();

    // Draw unit
    drawUnit(pos, getScl(0.165));
};

exampleNamespace.exampleUnit_ability = function(moves, gridPosition, lastMove) {
    if(moves % 4 == 0) {
        for(i = 0; i < d8.length; i++) {
            effectExplode(Vec2.add(gridPosition, Vec2.scale(d8[i], 2)));
            damageBlocks(Vec2.add(gridPosition, Vec2.scale(d8[i], 2)));
        }
    }
};

// log(exampleNamespace.exampleUnit_draw)
// log(exampleNamespace.exampleUnit_ability)
