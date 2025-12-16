import { MCPTool } from "../types.js";
import { APIClient } from "../client.js";
import * as schemas from "../schemas/mma-schemas.js";

export function createMMATools(apiClient: APIClient): MCPTool[] {
  return [
    {
      name: "mma_get_leagues",
      description:
        "Get all MMA leagues (UFC, Bellator, etc.)",
      inputSchema: schemas.mmaLeaguesSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/leagues", params, headers);
      },
    },

    {
      name: "mma_get_league_by_id",
      description: "Get a specific MMA league by ID",
      inputSchema: schemas.mmaLeagueByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/mma/v1/leagues/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "mma_get_events",
      description:
        "Get MMA events with optional filtering by date or year",
      inputSchema: schemas.mmaEventsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/events", params, headers);
      },
    },

    {
      name: "mma_get_event_by_id",
      description: "Get a specific MMA event by ID",
      inputSchema: schemas.mmaEventByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/mma/v1/events/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "mma_get_fighters",
      description:
        "Get MMA fighters with optional search and filtering",
      inputSchema: schemas.mmaFightersSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/fighters", params, headers);
      },
    },

    {
      name: "mma_get_fighter_by_id",
      description: "Get a specific MMA fighter by ID",
      inputSchema: schemas.mmaFighterByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/mma/v1/fighters/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "mma_get_fights",
      description:
        "Get MMA fights with optional filtering by fight, fighter, or event IDs",
      inputSchema: schemas.mmaFightsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/fights", params, headers);
      },
    },

    {
      name: "mma_get_fight_by_id",
      description: "Get a specific MMA fight by ID",
      inputSchema: schemas.mmaFightByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/mma/v1/fights/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "mma_get_rankings",
      description:
        "Get current MMA fighter rankings by weight class and league",
      inputSchema: schemas.mmaRankingsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/rankings", params, headers);
      },
    },

    {
      name: "mma_get_fight_stats",
      description:
        "Get detailed MMA fight statistics with optional filtering",
      inputSchema: schemas.mmaFightStatsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/fight_stats", params, headers);
      },
    },

    {
      name: "mma_get_fight_stat_by_id",
      description: "Get statistics for a specific fight performance",
      inputSchema: schemas.mmaFightStatByIdSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        const { id } = params;
        return await apiClient.makeRequest(
          `/mma/v1/fight_stats/${id}`,
          undefined,
          headers
        );
      },
    },

    {
      name: "mma_get_betting_odds",
      description:
        "Get MMA betting odds for fights. Either event_id or fight_id is required.",
      inputSchema: schemas.mmaBettingOddsSchema,
      handler: async (params: any, headers?: Record<string, string>) => {
        return await apiClient.makeRequest("/mma/v1/odds", params, headers);
      },
    },
  ];
}
