import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/soccer-schemas.js";

export function createSerieATools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "seriea_get_teams",
      description: "Get all Serie A teams for a given season",
      inputSchema: schemas.soccerTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/teams", params, headers);
      },
    },

    {
      name: "seriea_get_rosters",
      description: "Get Serie A team rosters with player information for a specific team and season",
      inputSchema: schemas.soccerRostersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/rosters", params, headers);
      },
    },

    {
      name: "seriea_get_players",
      description: "Get Serie A players with optional filtering by team or search term",
      inputSchema: schemas.soccerPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/players", params, headers);
      },
    },

    {
      name: "seriea_get_standings",
      description: "Get Serie A standings for a specific season",
      inputSchema: schemas.soccerStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/standings", params, headers);
      },
    },

    {
      name: "seriea_get_matches",
      description: "Get Serie A matches with optional filtering by season, dates, or teams",
      inputSchema: schemas.soccerMatchesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/matches", params, headers);
      },
    },

    {
      name: "seriea_get_match_events",
      description: "Get Serie A match events (goals, cards, substitutions, etc.)",
      inputSchema: schemas.soccerMatchEventsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/match_events", params, headers);
      },
    },

    {
      name: "seriea_get_match_lineups",
      description: "Get Serie A match lineups (starting and substitute players)",
      inputSchema: schemas.soccerMatchLineupsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/match_lineups", params, headers);
      },
    },

    {
      name: "seriea_get_player_match_stats",
      description: "Get Serie A player match statistics",
      inputSchema: schemas.soccerPlayerMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/player_match_stats", params, headers);
      },
    },

    {
      name: "seriea_get_team_match_stats",
      description: "Get Serie A team match statistics",
      inputSchema: schemas.soccerTeamMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/team_match_stats", params, headers);
      },
    },

    {
      name: "seriea_get_betting_odds",
      description: "Get Serie A betting odds for matches. Includes moneyline odds for home, away, and draw outcomes.",
      inputSchema: schemas.soccerBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/odds", params, headers);
      },
    },

    {
      name: "seriea_get_player_props",
      description: "Get Serie A player prop betting odds. Player prop data is LIVE and updated in real-time.",
      inputSchema: schemas.soccerPlayerPropsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/seriea/v1/odds/player_props", params, headers);
      },
    },
  ];
}
