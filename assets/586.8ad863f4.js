const a=[0,0,0,.22,0,.63,.03,.02,0,.44,0,.86,.53,0,0,.88,0,.55,.21,.89,.78,.64,.48,0,0,0,.26,.33,.25,.01,0,.67,0,.84,0,.66,0,0,.02,0,.41,0,.01,.8,.76,0,.01,.31,0,.14,.01,.57,.01,0,.42,0,0,.15,.44,0,.86,0,0,.57,0,.1,0,0,.42,.92,.22,0,.7,.28,0,.57,.38,.74,0,.01,0,0,.74,0,.42,.51,0,.26,0,0,0,.81,.92,0,.06,.1,0,.84,.17,.93,.36,0,.16,.35,.17,.38,.55,.04,0,.03,.76,.64,.35,0,.85,0,.06,.18,.52,0,.42,.51,.02,.14,.01,.07,0,.06,.25,0,0,0,.64,.01,0,.77,0,.98,.04,.51,0,.97,0,0,.64,.05,.63,.06,0,.3,0,.42,.82,.27,0,0,.52,.55,.52,0,0,.01,.99,.72,.54,.37,0,.11,.01,0,.95,.11,0,0,.01,.01,.97,0,.05,0,.49,.48,.24,0,.5,.19,.19,.74,.01,.12,.32,.15,.23,0,0,0,.01,.19,.64,.82,0,0,0,.53,0,.28,.01,.03,.18,.16,0,0,.86,0,.19,.45,.56,.06,.01,.16,.06,.66,.04,0,.01,0,0,.06,.86,.01,.11,.08,0,0,.21,.71,0,0,.12,.37,.55,0,0,0,.99,.03,.15,.89,.2,.54,.01,.48,.5,.66,0,.76,.54,0,.22,0,.14,0,.01,0,.01,.27,.6,0,.02,0,.28,.09,0,0,0,.43,0,.26,0,0,0,.09,0,0,.12,0,.02,0,.01,.23,.02,.06,0,.19,.2,.01,0,.04,.74,.1,.97,0,.31,.3,.66,0,1,.02,0,0,0,.19,.45,.65,.37,.06,0,0,0,.75,0,.83,0,0,0,.1,0,0,.69,.18,0,0,.28,.57,.61,.4,.03,.35,.38,.73,.25,0,.01,.38,0,0,.9,.01,.02,.16,0,0,.24,.13,.08,0,.42,.48,0,0,0,.67,.02,.15,.25,0,.54,0,.89,.28,0,.02,0,.02,.73,.55,.01,0,.49,.01,.14,.73,.26,.84,.86,.19,.68,.64,0,0,0,.4,.48,.04,.18,0,.78,.09,0,.03,.49,.4,0,0,.01,.41,0,0,0,0,0,0,0,0,.11,.93,0,0,0,.12,.8,0,.06,.54,0,0,0,.98,.16,0,0,.01,0,.62,0,0,.07,0,0,0,0,0,0,.03,.5,.17,0,0,.14,.15,0,.58,0,.26,.83,.04,.01,0,.05,0,0,0,0,.27,.07,.29,0,.88,0,0,.02,0,0,.12,0,0,0,.28,0,.09,0,0,0,.15,.48,.22,.79,0,0,0,.19,.99,.47,0,0,0,0,.44,0,0,.08,0,0,0,0,0,.04,0,0,.65,0,.27,0,.58,.68,.2,.02,.02,.11,0,.76,0,.48,.32,.03,1,.49,.24,.68,0,.01,0,.08,0,.85,.27,.1,.01,0,.41,.39,.01,.58,0,.07,.05,.06,0,0,.51,.04,0,0,0,0,.28,.01,0,.13,.46,0,.05,.97,.01,.97,.06,.03,.25,.02,.79,0,0,0,0,0,0,.47,0,.05,.03,.05,.08,0,.45,.46,0,0,0,.11,0,.37,.29,.74,0,.01,0,0,0,.41,.68,0,0,0,.58,0,.12,0,.77,.08,.21,.97,0,.06,.15,.02,.92,0,.03,.24,.73,0,.02,.14,.7,.01,.36,.05,.12,0,0,.45,.21,.06,.02,.11,.12,0,0,0,.28,.36,0,.58,.35,.01,0,0,0,.44,.62,.99,0,0,0,0,.84,0,.71,.21,.2,0,.01,0,.01,0,.27,.14,.11,0,0,0,.38,.48,.06,.48,0,0,0,0,.47,.66,0,0,0,.01,.17,0,0,0,0,.3,.01,0,.24,.1,.09,.05,.15,0,0,0,.43,.09,0,.6,.55,.24,0,.44,.15,0,0,.27,.51,.02,.52,.43,.7,.44,.2,.37,0,0,.55,0,0,.04,.55,.17,0,0,.97,0,.73,.36,0,0,.11,.97,.14,0,0,.44,0,.89,0,0,0,.24,.31,.55,.06,.45,.51,0,.81,.98,0,0,.66,.05,.18,0,.35,0,0,0,.03,.03,.39,0,0,0,.82,0,.14,.27,.2,0,.07,0,.66,.88,0,0,.02,.53,.34,.84,.14,.68,.02,.09,0,0,.13,0,0,0,.92,.6,.03,.05,0,0,0,0,.14,.04,.98,.75,.01,0,.9,0,0,0,0,.06,0,.2,0,0,0,.57,0,.92,.97,.77,.53,.04,0,.01,.04,.52,.35,.91,.25,.29,.41,.12,0,.55,0,.34,0,.01,.12,.16,.69,.97,.02,0,.77,.42,.81,.02,0,.6,.06,0,0,.99,0,0,0,.06,.55,.27,0,0,.14,.31,0,0,.01,.5,.26,.95,.9,.14,0,.12,0,0,.51,.01,0,0,.05,0,0,0,.8,0,.52,0,.03,0,0,.32,.96,.93,.2,.71,0,.06,0,.25,0,.17,0,.02,0,0,.15,.17,0,0,.63,0,.53,0,0,0,0,.48,0,0,.03,.1,0,0,0,0,0,.35,.37,0,0,.08,.8,.02,0,.27,.18,.23,0,.25,.01,.04,.88,.39,.9,0,0,0,.01,0,.79,0,.07,.16,.42,0,.15,.61,.09,0,.4,.47,0,0,0,0,.15,.05,0,.03,0,0,0,.4,.21,.37,.01,0,.21,.43,.43,.15,0,0,.01,.37,0,.33,.72,.64,.7,.5,.63,.6,.16,.08,0,.98,.15,.27,.72,.06,.09,.06,0,.01,.01,0,0,0,.18,0,.09,0,.8,.4,.12,0,.58,.19,.57,0,.81,.08,.27,.28,.04,0,.1,0,.38,0,0,.03,.26,.58,0,.35,.03,.21,0,0,0,.14,.01,0,.96,.03,.53,0,0,.01,.63,.14,0,.04,.97,.08,0,0,.17,.09,.39,.6,0,.89,0,0,0,0,0,.75,.79,.44,.61,.28,0,.23,.02,.6,0,.93,0,0,.92,0,0,0,.58,0,0,0,.26,0,0,0,0,0,.75,0,.72,.39,.08,.38,.46,.21,.43,.03,0,.09,0,.64,0,.92,.25,.22,.71,.55,0,.01,.76,0,0,0,.02,.12,0,0,0,.88,.01,0,.02,.36,0,0,.56,0,0,0,.9,.93,.08,.21,0,.3,0,.71,.07,1,.78,0,0,.16,.11,0,.08,0,0,0,.01,0,.13,0,.11,.08,.06,0,.29,0,.53,0,.24,.31,0,.02,.43,0,0,.14,0,.59,.01,0,.56,0,.47,.05,0,0,.03,.07,0,.54,0,.26,0,0,0,0,0,0,.05,.05,0,0,.02,.09,0,0,.01,.08,0,0,.61,.68,.09,.85,.01,.24,.01,.04,0,0,.22,0,0,0,.58,.67,.53,0,0,0,.39,.78,.23,.63,.14,0,.91,0,.06,.04,.02,.07,.11,.43,.03,0,0,0,0,.18,0,.14,.66,.36,.14,.82,.65,0,.78,0,0,.57,0,.01,.03,0,.23,.02,.24,0,0,0,.94,0,.03,.78,.3,0,0,0,.05,0,.02,.67,0,0,.09,0,0,.14,.38,.07,0,.32,0,0,.62,.72,0,0,.63,.12,.23,.4,0,0,.98,.79,.07,.07,0,0,0,0,0,.05,.09,.2,0,0,.02,.24,.01,0,.28,.76,0,0,.01,.8,0,.46,.28,.02,.21,.87,.09,.2,.07,.03,0,.46,.52,.03,.25,0,0,.03,0,.26,.04,0,.05,0,.05,.94,.26,.02,.61,.36,0,.08,.07,0,0,.58,0,.11,0,0,.99,0,.04,.25,.34,.51,0,.02,.08,.19,.69,0,0,0,.03,0,.1,0,.48,.01,0,0,0,.25,.32,.69,.02,0,0,.72,.05,.02,0,.28,.34,.53,.5,0,.44,.29,.36,.11,.04,0,.76,.43,0,.8,.11,0,.28,0,0,.61,.23,.56,.97,.34,0,0,0,.84,0,.74,.42,.7,.05,0,0,.06,0,0,0,0,0,.21,.85,.31,0,0,.58,.61,0,.24,.22,.09,.1,.01,.39,0,.17,0,.06,0,.06,.64,.17,.01,.02,.64,.05,0,0,.38,.2,.35,.91,0,0,.67,.01,.12,.01,.44,.99,.5,0,.27,.67,0,.07,.01,.84,0,.82,.04,0,0,.01,0,.58,.08,.07,0,.01,.01,0,0,.05,.51,.42,.72,.05,0,.92,.08,.11,0,0,.05,0,0,.95,.01,0,.38,0,0,0,0,0,0,0,0,.02,0,.3,0,.08,0,0,.88,.04,0,0,0,0,.05,.31,0,0,.89,0,0,.84,0,.58,0,0,0,0,.88,0,0,.21,.28,0,0,.78,0,0,0,.84,.42,0,0,0,0,.03,.24,.03,0,0,0,0,.31,0,.11,0,.01,.65,0,0,.27,.54,0,.28,.49,0,.03,.35,0,.28,.42,0,.57,0,.35,0,.08,.64,.11,0,.65,.11,.73,.04,0,.26,0,.41,.65,.44,0,0,0,0,0,0,0,.02,.06,.09,.01,.93,.68,0,.03,0,.15,0,0,.63,.81,.06,.05,0,.97,0,0,0,0,.03,0,.56,.04,.64,0,.05,0,0,0,.4,0,.65,0,0,.5,0,.24,.88,0,.14,.76,0,.58,.01,.99,.04,.67,.43,.97,0,0,0,0,0,0,0,0,0,0,.58,.06,.07,0,.94,.12,.84,.39,.73,.03,0,0,0,.85,0,.19,.06,0,0,0,0,0,.04,.24,.47,.69,.19,.21,0,0,0,0,.04,.19,0,.99,.47,.01,.81,0,.23,0,0,0,0,.92,.03,0,0,.09,.12,.8,0,0,.05,.15,0,.65,0,.5,.8,.04,.09,.02,.06,.04,0,0,.1,0,0,.42,.4,.36,0,0,0,0,0,0,.01,.01,.54,0,.32,0,0,0,.05,.88,.39,.5,.05,0,0,0,0,.02,.44,0,.66,.85,.65,0,0,0,0,0,0,0,.64,.01,.62,.08,0,0,.28,0,0,0,0,.25,.03,0,.39,0,.67,.36,.27,.3,.72,.37,0,0,.9,.01,0,.1,0,.07,0,.01,.5,.31,.44,0,.56,0,0,.04,.55,0,0,0,.49,.41,0,.03,0,0,.78,.02,.03,0,.87,0,.73,0,.05,.31,.05,.56,0,.29,.17,.37,0,.09,.24,0,0,0,0,.04,0,0,.15,.19,.59,.94,.23,0,0,.1,0,0,.02,.92,.44,0,0,0,0,.5,.89,.01,.32,.5,0,0,.86,.62,0,0,.23,0,0,.24,0,.2,.15,.13,0,.03,0,0,.66,.03,.85,0,.19,.36,.61,.05,.17,0,0,0,0,0,0,0,0,0,.24,.03,.36,0,0,0,.6,.21,.44,0,0,0,0,.94,.03,0,.01,.91,.97,.25,.18,.48,.05,.31,0,0,0,0,.6,.26,.48,.26,0,.66,.84,.04,0,0,.44,.81,0,.32,0,0,0,.28,0,.67,.17,0,0,0,0,0,.07,0,.59,0,0,.18,0,0,0,0,0,0,0,.01,0,0,.86,.81,0,0,0,0,0,0,0,0,.69,0,0,.74,0,0,.91,0,.01,0,0,.51,.35,0,0,0,.03,0,0,0,.01,.01,.6,.39,.17,.13,0,.17,.02,0,1,.18,.03];export{a as pvalData};
