export interface RecipeData {
    id: number;
    name?: string;
    thumbnail_url?: string;
    country?: string;
    tags: [
        {
            name: string;
            id: number;
            display_name: string;
        }
    ];
    description?: string;
    nutrition: {};
    user_ratings: {
        score: number;
        count_negative: number,
        count_positive: number,
    };
    original_video_url: string;
    instructions: [{
        id: number,
        display_text: string;
        position: number;
    }]
    recipes?: RecipeData[];
}

export interface Nutrition {
    [key: string]: number;
}