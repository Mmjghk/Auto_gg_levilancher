import { world, system } from "@minecraft/server";

// هذا الكود يراقب الأحداث في العالم
world.afterEvents.chatSend.subscribe((eventData) => {
    const message = eventData.message.toLowerCase(); // تحويل النص لصغير لسهولة المقارنة
    
    // إذا كتب أي شخص كلمة "win" أو "game over"
    if (message.includes("win") || message.includes("game over")) {
        
        // ننتظر ثانية واحدة (20 تكة) ثم نرد
        system.runTimeout(() => {
            // يكتب في الشات باسمك
            world.getDimension("overworld").runCommand("say GG! Good Game");
        }, 20);
    }
});
