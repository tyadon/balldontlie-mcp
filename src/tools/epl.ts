import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/epl-schemas.js";

export function createEPLTools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "epl_get_teams",
      description: "Get all EPL teams",
      inputSchema: schemas.eplTeamsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/epl/v1/teams", params, headers);
      },
    },

    {
      name: "epl_get_team_players",
      description: "Get players for a specific EPL team",
      inputSchema: schemas.eplTeamPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id, ...queryParams } = params;
        return await apiClient.makeRequest(
          `/epl/v1/teams/${id}/players`,
          queryParams,
          headers
        );
      },
    },

    {
      name: "epl_get_team_season_stats",
      description: "Get season statistics for a specific EPL team",
      inputSchema: schemas.eplTeamSeasonStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id, ...queryParams } = params;
        return await apiClient.makeRequest(
          `/epl/v1/teams/${id}/season_stats`,
          queryParams,
          headers
        );
      },
    },

    {
      name: "epl_get_team_stats_leaders",
      description: "Get EPL team statistical leaders",
      inputSchema: schemas.eplTeamStatsLeadersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/epl/v1/team_stats/leaders",
          params,
          headers
        );
      },
    },

    {
      name: "epl_get_standings",
      description: "Get EPL team standings",
      inputSchema: schemas.eplStandingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/epl/v1/standings",
          params,
          headers
        );
      },
    },

    {
      name: "epl_get_players",
      description: "Get EPL players with optional filtering and pagination",
      inputSchema: schemas.eplPlayersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/epl/v1/players", params, headers);
      },
    },

    {
      name: "epl_get_player_season_stats",
      description: "Get season statistics for a specific EPL player",
      inputSchema: schemas.eplPlayerSeasonStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id, ...queryParams } = params;
        return await apiClient.makeRequest(
          `/epl/v1/players/${id}/season_stats`,
          queryParams,
          headers
        );
      },
    },

    {
      name: "epl_get_player_stats_leaders",
      description: "Get EPL player statistical leaders",
      inputSchema: schemas.eplPlayerStatsLeadersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest(
          "/epl/v1/player_stats/leaders",
          params,
          headers
        );
      },
    },

    {
      name: "epl_get_games",
      description:
        "Get EPL games with optional filtering by date, season, team, etc.",
      inputSchema: schemas.eplGamesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/epl/v1/games", params, headers);
      },
    },

    {
      name: "epl_get_game_lineups",
      description: "Get lineups for a specific EPL game",
      inputSchema: schemas.eplGameLineupsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/epl/v1/games/${id}/lineups`,
          undefined,
          headers
        );
      },
    },

    {
      name: "epl_get_game_goals",
      description: "Get goals scored in a specific EPL game",
      inputSchema: schemas.eplGameGoalsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/epl/v1/games/${id}/goals`,
          undefined,
          headers
        );
      },
    },

    {
      name: "epl_get_game_team_stats",
      description: "Get team statistics for a specific EPL game",
      inputSchema: schemas.eplGameTeamStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/epl/v1/games/${id}/team_stats`,
          undefined,
          headers
        );
      },
    },

    {
      name: "epl_get_game_player_stats",
      description: "Get player statistics for a specific EPL game",
      inputSchema: schemas.eplGamePlayerStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/epl/v1/games/${id}/player_stats`,
          undefined,
          headers
        );
      },
    },
  ];
}
