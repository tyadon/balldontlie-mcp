import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/soccer-schemas.js";

export function createUCLTools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "ucl_get_teams",
      description: "Get all UEFA Champions League teams for a given season",
      inputSchema: schemas.soccerTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/teams", params, headers);
      },
    },

    {
      name: "ucl_get_rosters",
      description: "Get UEFA Champions League team rosters with player information for a specific team and season",
      inputSchema: schemas.soccerRostersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/rosters", params, headers);
      },
    },

    {
      name: "ucl_get_players",
      description: "Get UEFA Champions League players with optional filtering by team or search term",
      inputSchema: schemas.soccerPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/players", params, headers);
      },
    },

    {
      name: "ucl_get_standings",
      description: "Get UEFA Champions League standings for a specific season",
      inputSchema: schemas.soccerStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/standings", params, headers);
      },
    },

    {
      name: "ucl_get_matches",
      description: "Get UEFA Champions League matches with optional filtering by season, dates, or teams",
      inputSchema: schemas.soccerMatchesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/matches", params, headers);
      },
    },

    {
      name: "ucl_get_match_events",
      description: "Get UEFA Champions League match events (goals, cards, substitutions, etc.)",
      inputSchema: schemas.soccerMatchEventsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/match_events", params, headers);
      },
    },

    {
      name: "ucl_get_match_lineups",
      description: "Get UEFA Champions League match lineups (starting and substitute players)",
      inputSchema: schemas.soccerMatchLineupsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/match_lineups", params, headers);
      },
    },

    {
      name: "ucl_get_player_match_stats",
      description: "Get UEFA Champions League player match statistics",
      inputSchema: schemas.soccerPlayerMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/player_match_stats", params, headers);
      },
    },

    {
      name: "ucl_get_team_match_stats",
      description: "Get UEFA Champions League team match statistics",
      inputSchema: schemas.soccerTeamMatchStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/team_match_stats", params, headers);
      },
    },

    {
      name: "ucl_get_betting_odds",
      description: "Get UEFA Champions League betting odds for matches. Includes moneyline odds for home, away, and draw outcomes.",
      inputSchema: schemas.soccerBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/odds", params, headers);
      },
    },

    {
      name: "ucl_get_player_props",
      description: "Get UEFA Champions League player prop betting odds. Player prop data is LIVE and updated in real-time.",
      inputSchema: schemas.soccerPlayerPropsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/odds/player_props", params, headers);
      },
    },

    {
      name: "ucl_get_futures_odds",
      description: "Get UEFA Champions League futures betting odds (e.g., tournament winner). Only available for UCL.",
      inputSchema: schemas.soccerFuturesOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/ucl/v1/odds/futures", params, headers);
      },
    },
  ];
}
