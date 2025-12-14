import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/nfl-schemas.js";

export function createNFLTools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "nfl_get_teams",
      description:
        "Get all NFL teams with optional filtering by division or conference",
      inputSchema: schemas.nflTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/nfl/v1/teams", params, headers);
      },
    },

    {
      name: "nfl_get_team_by_id",
      description: "Get a specific NFL team by ID",
      inputSchema: schemas.nflTeamByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/nfl/v1/teams/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "nfl_get_players",
      description: "Get NFL players with optional filtering and pagination",
      inputSchema: schemas.nflPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/nfl/v1/players", params, headers);
      },
    },

    {
      name: "nfl_get_player_by_id",
      description: "Get a specific NFL player by ID",
      inputSchema: schemas.nflPlayerByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/nfl/v1/players/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "nfl_get_active_players",
      description: "Get all currently active NFL players",
      inputSchema: schemas.nflPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/players/active",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_games",
      description:
        "Get NFL games with optional filtering by date, season, week, team, etc.",
      inputSchema: schemas.nflGamesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/nfl/v1/games", params, headers);
      },
    },

    {
      name: "nfl_get_game_by_id",
      description: "Get a specific NFL game by ID",
      inputSchema: schemas.nflGameByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/nfl/v1/games/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "nfl_get_stats",
      description: "Get NFL player and game statistics with filtering options",
      inputSchema: schemas.nflStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/nfl/v1/stats", params, headers);
      },
    },

    {
      name: "nfl_get_season_stats",
      description: "Get NFL player season statistics",
      inputSchema: schemas.nflSeasonStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/season_stats",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_standings",
      description: "Get NFL team standings by season, conference, or division",
      inputSchema: schemas.nflStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/standings",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_player_injuries",
      description: "Get NFL player injury reports and status",
      inputSchema: schemas.nflPlayerInjuriesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/player_injuries",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_advanced_rushing_stats",
      description: "Get NFL advanced rushing statistics and analytics",
      inputSchema: schemas.nflAdvancedStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/advanced_stats/rushing",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_advanced_passing_stats",
      description: "Get NFL advanced passing statistics and analytics",
      inputSchema: schemas.nflAdvancedStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/advanced_stats/passing",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_advanced_receiving_stats",
      description: "Get NFL advanced receiving statistics and analytics",
      inputSchema: schemas.nflAdvancedStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/advanced_stats/receiving",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_betting_odds",
      description: "Get NFL betting odds for games. Either (season and week) or game_ids is required. Available starting from 2025 season, week 8 onwards.",
      inputSchema: schemas.nflBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/nfl/v1/odds", params, headers);
      },
    },

    {
      name: "nfl_get_team_season_stats",
      description:
        "Get NFL team season stats including offense, defense, special teams, and opponent stats",
      inputSchema: schemas.nflTeamSeasonStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/team_season_stats",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_team_stats",
      description: "Get NFL team game statistics for individual games",
      inputSchema: schemas.nflTeamStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/team_stats",
          params,
          headers
        );
      },
    },

    {
      name: "nfl_get_plays",
      description:
        "Get NFL play-by-play data for games, ordered chronologically by wallclock time",
      inputSchema: schemas.nflPlaysSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/nfl/v1/plays", params, headers);
      },
    },

    {
      name: "nfl_get_team_roster",
      description:
        "Get NFL team roster with depth chart information. Roster data is only available starting with the 2025 season.",
      inputSchema: schemas.nflRosterSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id, ...queryParams } = params;
        return await apiClient.makeRequest(
          `/nfl/v1/teams/${id}/roster`,
          queryParams,
          headers
        );
      },
    },

    {
      name: "nfl_get_player_props",
      description:
        "Get NFL player prop betting odds. Player prop data is LIVE and updated in real-time. Returns all player props for the specified game.",
      inputSchema: schemas.nflPlayerPropsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/nfl/v1/odds/player_props",
          params,
          headers
        );
      },
    },
  ];
}
