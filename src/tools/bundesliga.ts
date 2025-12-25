import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/soccer-schemas.js";

export function createBundesligaTools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "bundesliga_get_teams",
      description: "Get all Bundesliga teams for a given season",
      inputSchema: schemas.soccerTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/teams", params, headers);
      },
    },

    {
      name: "bundesliga_get_rosters",
      description: "Get Bundesliga team rosters with player information for a specific team and season",
      inputSchema: schemas.soccerRostersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/rosters", params, headers);
      },
    },

    {
      name: "bundesliga_get_players",
      description: "Get Bundesliga players with optional filtering by team or search term",
      inputSchema: schemas.soccerPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/players", params, headers);
      },
    },

    {
      name: "bundesliga_get_standings",
      description: "Get Bundesliga standings for a specific season",
      inputSchema: schemas.soccerStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/standings", params, headers);
      },
    },

    {
      name: "bundesliga_get_matches",
      description: "Get Bundesliga matches with optional filtering by season, dates, or teams",
      inputSchema: schemas.soccerMatchesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/matches", params, headers);
      },
    },

    {
      name: "bundesliga_get_match_events",
      description: "Get Bundesliga match events (goals, cards, substitutions, etc.)",
      inputSchema: schemas.soccerMatchEventsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/match_events", params, headers);
      },
    },

    {
      name: "bundesliga_get_match_lineups",
      description: "Get Bundesliga match lineups (starting and substitute players)",
      inputSchema: schemas.soccerMatchLineupsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/match_lineups", params, headers);
      },
    },

    {
      name: "bundesliga_get_player_match_stats",
      description: "Get Bundesliga player match statistics",
      inputSchema: schemas.soccerPlayerMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/player_match_stats", params, headers);
      },
    },

    {
      name: "bundesliga_get_team_match_stats",
      description: "Get Bundesliga team match statistics",
      inputSchema: schemas.soccerTeamMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/team_match_stats", params, headers);
      },
    },

    {
      name: "bundesliga_get_betting_odds",
      description: "Get Bundesliga betting odds for matches. Includes moneyline odds for home, away, and draw outcomes.",
      inputSchema: schemas.soccerBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/odds", params, headers);
      },
    },

    {
      name: "bundesliga_get_player_props",
      description: "Get Bundesliga player prop betting odds. Player prop data is LIVE and updated in real-time.",
      inputSchema: schemas.soccerPlayerPropsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/bundesliga/v1/odds/player_props", params, headers);
      },
    },
  ];
}
