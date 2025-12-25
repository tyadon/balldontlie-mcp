import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/soccer-schemas.js";

export function createLigue1Tools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "ligue1_get_teams",
      description: "Get all Ligue 1 teams for a given season",
      inputSchema: schemas.soccerTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/teams", params, headers);
      },
    },

    {
      name: "ligue1_get_rosters",
      description: "Get Ligue 1 team rosters with player information for a specific team and season",
      inputSchema: schemas.soccerRostersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/rosters", params, headers);
      },
    },

    {
      name: "ligue1_get_players",
      description: "Get Ligue 1 players with optional filtering by team or search term",
      inputSchema: schemas.soccerPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/players", params, headers);
      },
    },

    {
      name: "ligue1_get_standings",
      description: "Get Ligue 1 standings for a specific season",
      inputSchema: schemas.soccerStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/standings", params, headers);
      },
    },

    {
      name: "ligue1_get_matches",
      description: "Get Ligue 1 matches with optional filtering by season, dates, or teams",
      inputSchema: schemas.soccerMatchesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/matches", params, headers);
      },
    },

    {
      name: "ligue1_get_match_events",
      description: "Get Ligue 1 match events (goals, cards, substitutions, etc.)",
      inputSchema: schemas.soccerMatchEventsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/match_events", params, headers);
      },
    },

    {
      name: "ligue1_get_match_lineups",
      description: "Get Ligue 1 match lineups (starting and substitute players)",
      inputSchema: schemas.soccerMatchLineupsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/match_lineups", params, headers);
      },
    },

    {
      name: "ligue1_get_player_match_stats",
      description: "Get Ligue 1 player match statistics",
      inputSchema: schemas.soccerPlayerMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/player_match_stats", params, headers);
      },
    },

    {
      name: "ligue1_get_team_match_stats",
      description: "Get Ligue 1 team match statistics",
      inputSchema: schemas.soccerTeamMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/team_match_stats", params, headers);
      },
    },

    {
      name: "ligue1_get_betting_odds",
      description: "Get Ligue 1 betting odds for matches. Includes moneyline odds for home, away, and draw outcomes.",
      inputSchema: schemas.soccerBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/odds", params, headers);
      },
    },

    {
      name: "ligue1_get_player_props",
      description: "Get Ligue 1 player prop betting odds. Player prop data is LIVE and updated in real-time.",
      inputSchema: schemas.soccerPlayerPropsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ligue1/v1/odds/player_props", params, headers);
      },
    },
  ];
}
