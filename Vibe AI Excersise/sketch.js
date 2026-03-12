// Vibe AI Excersise
// Amaan Rehman
// 3/10/26
//
// Go crazy

// Add these to the top of your existing code variables
let screenShake = 0;

// Update the playLoop() function to include screen shake and enemy fire
function playLoop() {
  background(10, 10, 25);
  
  if (screenShake > 0) {
    translate(random(-screenShake, screenShake), random(-screenShake, screenShake));
    screenShake *= 0.9; // Fade out shake
  }
  


  // ... (Keep your player update/display code here) ...

  // Update Lasers (Handling both Player and Enemy types)
  for (let i = lasers.length - 1; i >= 0; i--) {
    let l = lasers[i];
    l.update();
    l.display();

    if (l.type === 'enemy') {
      // Check if Enemy Laser hits Player
      if (playerShip.hits(l, 5) && !shieldActive) {
        playerHealth -= 1;
        screenShake = 10; // Trigger shake
        l.active = false;
        createExplosion(playerShip.pos.x, playerShip.pos.y, 20, color(255, 0, 0));
        if (playerHealth <= 0) gameState = "GAMEOVER";
      }
    } else {
      // Check if Player Laser hits Enemies
      for (let j = enemies.length - 1; j >= 0; j--) {
        if (l.hits(enemies[j])) {
          score += 100;
          createExplosion(enemies[j].pos.x, enemies[j].pos.y, 30, color(255, 50, 0));
          enemies.splice(j, 1);
          l.active = false;
          break;
        }
      }
    }

    if (!l.active || l.offscreen()) lasers.splice(i, 1);
  }

  // Update Enemies
  for (let e of enemies) {
    e.update(playerShip);
    e.display();
    
    // Firing Logic: Shoot every 120 frames (approx 2 seconds)
    if (frameCount % 120 === 0) {
      let angleToPlayer = atan2(playerShip.pos.y - e.pos.y, playerShip.pos.x - e.pos.x);
      lasers.push(new Laser(e.pos, angleToPlayer, 'enemy'));
    }
  }

  drawHUD();
}

// Update the Laser class to handle colors
class Laser {
  constructor(spos, angle, type = 'player') {
    this.pos = createVector(spos.x, spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(type === 'player' ? 12 : 7); // Enemy lasers are slightly slower but dodgeable
    this.type = type;
    this.active = true;
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    push();
    strokeWeight(4);
    if (this.type === 'player') {
      stroke(0, 255, 255); // Cyan for player
    } else {
      stroke(255, 0, 0); // Bright Red for enemies
    }
    point(this.pos.x, this.pos.y);
    pop();
  }

  hits(obj, range = obj.r) {
    let d = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y);
    return d < range;
  }

  offscreen() {
    return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height);
  }
}

// Ensure EnemyShip display shows it's a "Hunter"
class EnemyShip {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.r = 20;
    this.angle = 0;
  }

  update(player) {
    // Steer toward player
    let desired = p5.Vector.sub(player.pos, this.pos);
    this.angle = desired.heading();
    
    // Keep a distance of 200 pixels (don't just crash into the player)
    if (desired.mag() > 200) {
      desired.setMag(2);
      this.pos.add(desired);
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle + PI / 2);
    fill(150, 0, 0);
    stroke(255, 50, 50);
    // V-shaped enemy ship
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    // Glowing engine
    fill(255, 255, 0);
    rect(-5, this.r - 5, 10, 5);
    pop();
  }
}