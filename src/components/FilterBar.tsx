import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import {TaskStatusFilter} from '../types/task';

type FilterBarProps = {
  searchQuery: string;
  selectedFilter: TaskStatusFilter;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: TaskStatusFilter) => void;
};

const filters: TaskStatusFilter[] = ['all', 'pending', 'completed'];

export function FilterBar({
  searchQuery,
  selectedFilter,
  onSearchChange,
  onFilterChange,
}: FilterBarProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>FILTERS</Text>
      <Text style={styles.heading}>Search and filter</Text>

      <TextInput
        placeholder="Search by title"
        placeholderTextColor="#98a2b3"
        style={styles.input}
        value={searchQuery}
        onChangeText={onSearchChange}
      />

      <View style={styles.filtersRow}>
        {filters.map(filter => {
          const isActive = selectedFilter === filter;

          return (
            <Pressable
              key={filter}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
              onPress={() => onFilterChange(filter)}>
              <Text
                style={[
                  styles.filterButtonText,
                  isActive && styles.filterButtonTextActive,
                ]}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 16,
    padding: 24,
  },
  eyebrow: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  heading: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderRadius: 16,
    color: '#101828',
    fontSize: 15,
    marginBottom: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#f8fafc',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  filterButtonActive: {
    backgroundColor: '#0f172a',
  },
  filterButtonText: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
});
