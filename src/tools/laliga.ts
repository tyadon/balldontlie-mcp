import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/soccer-schemas.js";

export function createLaLigaTools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "laliga_get_teams",
      description: "Get all La Liga teams for a given season",
      inputSchema: schemas.soccerTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/teams", params, headers);
      },
    },

    {
      name: "laliga_get_rosters",
      description: "Get La Liga team rosters with player information for a specific team and season",
      inputSchema: schemas.soccerRostersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/rosters", params, headers);
      },
    },

    {
      name: "laliga_get_players",
      description: "Get La Liga players with optional filtering by team or search term",
      inputSchema: schemas.soccerPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/players", params, headers);
      },
    },

    {
      name: "laliga_get_standings",
      description: "Get La Liga standings for a specific season",
      inputSchema: schemas.soccerStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/standings", params, headers);
      },
    },

    {
      name: "laliga_get_matches",
      description: "Get La Liga matches with optional filtering by season, dates, or teams",
      inputSchema: schemas.soccerMatchesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/matches", params, headers);
      },
    },

    {
      name: "laliga_get_match_events",
      description: "Get La Liga match events (goals, cards, substitutions, etc.)",
      inputSchema: schemas.soccerMatchEventsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/match_events", params, headers);
      },
    },

    {
      name: "laliga_get_match_lineups",
      description: "Get La Liga match lineups (starting and substitute players)",
      inputSchema: schemas.soccerMatchLineupsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/match_lineups", params, headers);
      },
    },

    {
      name: "laliga_get_player_match_stats",
      description: "Get La Liga player match statistics",
      inputSchema: schemas.soccerPlayerMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/player_match_stats", params, headers);
      },
    },

    {
      name: "laliga_get_team_match_stats",
      description: "Get La Liga team match statistics",
      inputSchema: schemas.soccerTeamMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/team_match_stats", params, headers);
      },
    },

    {
      name: "laliga_get_betting_odds",
      description: "Get La Liga betting odds for matches. Includes moneyline odds for home, away, and draw outcomes.",
      inputSchema: schemas.soccerBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/odds", params, headers);
      },
    },

    {
      name: "laliga_get_player_props",
      description: "Get La Liga player prop betting odds. Player prop data is LIVE and updated in real-time.",
      inputSchema: schemas.soccerPlayerPropsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/laliga/v1/odds/player_props", params, headers);
      },
    },
  ];
}
