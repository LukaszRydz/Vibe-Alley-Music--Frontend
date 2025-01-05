// export class Host {
//     public static readonly SHOP = `http://localhost:8050`;
//     public static readonly CLIENT = `http://localhost:8080`;
//     public static readonly ADMIN = `http://localhost:8000`;
//     public static readonly BOT = `http://localhost:5010`;
//     public static readonly SPOTIFY = `http://localhost:5000`;
//     public static readonly FRONT = `http://localhost:5173`;
// }

export class Host {
    private static readonly NGROK_HOST = `https://7dcb-185-87-137-39.ngrok-free.app`;

    public static readonly SHOP = `${this.NGROK_HOST}/shop`;
    public static readonly CLIENT = `${this.NGROK_HOST}/client`; 
    public static readonly ADMIN = `${this.NGROK_HOST}/admin`;    
    public static readonly BOT = `${this.NGROK_HOST}/bot`;        
    public static readonly SPOTIFY = `${this.NGROK_HOST}/spotify`;
    public static readonly FRONT = `https://lukaszrydz.github.io/Vibe-Alley-Music--Frontend`;         
}
