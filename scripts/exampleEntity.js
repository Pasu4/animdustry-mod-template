/**
 * @this {CustomEntity}
 */
exampleNamespace.exampleEntity = function() {
    var firstTurn = false;
    const restAngle = 270;

    
    if(!this.initDone) {
        this.initDone = true;
        firstTurn = true;
        
        this.startTurn = state.turn;
    }

    this.sprite = Sprites.arc;
    this.rot = rad(restAngle);
    this.scl = 1.0 + 0.2 * Math.sin(state.smoothTurn * Math.PI * 2);
    
    if(state.turn % 4 == 3) {
        this.rot = rad(restAngle + Math.pow(state.moveBeat, 2) * 360);
        
        if(state.newTurn && !firstTurn)
            this.pos = Vec2.add(this.pos, new Vec2(1, 0));
    }
    
    if(state.newTurn && state.turn % 2 == 0) {
        this.destroyImmediate();
        makeDelayBulletWarn(Vec2.add(this.pos, new Vec2(-1, 0)), new Vec2(0, -1), Sprites.bullet)
        makeDelayBulletWarn(Vec2.add(this.pos, new Vec2(1, 0)), new Vec2(0, -1), Sprites.bullet)
    }
}