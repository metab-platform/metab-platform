const a=[0,0,0,.26,0,.88,.03,.18,.03,.01,0,.44,.55,0,0,.76,.01,.38,.12,.32,.48,.14,.86,0,0,0,.29,.02,.01,.72,0,.05,0,.37,.05,.29,0,0,0,0,.6,0,0,.62,.22,0,.32,.43,.25,.23,.17,.86,0,0,0,0,0,.78,0,0,0,0,0,.84,.03,.77,0,0,.82,.36,.62,0,.03,.13,0,1,.27,.01,0,.97,0,0,.12,0,.4,.1,0,.8,0,0,.32,.74,.46,0,.25,.84,0,.11,.6,0,.61,0,0,.38,0,.6,.38,.37,0,0,.52,0,.96,0,.97,0,.65,.82,.01,0,.36,.35,0,.31,.76,0,0,.01,.77,0,.03,0,.06,.5,0,.68,.88,.19,.99,.12,0,.87,0,0,.64,.14,.66,.93,0,.04,0,.04,.63,.6,.1,.3,.57,.6,.02,0,.64,0,.79,.14,.42,.07,0,.45,.69,0,.97,.82,.14,0,0,.8,.74,.43,.35,0,.52,.42,.46,0,0,.72,.3,.02,.21,.22,.27,.79,.26,0,0,0,0,.1,.65,.07,.17,0,0,.75,0,0,.65,.09,.08,.38,.01,0,.77,0,.8,0,.87,.36,.94,.12,0,0,0,0,0,0,.08,.85,0,.05,.31,.36,0,0,.07,.59,0,.15,.76,.77,0,0,.09,.18,.75,0,.39,.23,.04,.75,.94,.35,0,.04,0,.51,.15,.04,.31,0,.13,.55,.05,0,.42,0,.24,0,.42,0,.63,0,0,0,0,.89,.06,.09,0,.38,.31,.23,.02,0,.12,0,.92,0,1,.94,.08,.04,0,.06,.67,0,.04,0,.89,.7,.8,0,.54,.02,.26,0,.81,0,.69,.05,0,.38,.09,.57,0,.74,.49,.35,0,.01,0,.96,0,0,.35,.13,0,.02,.63,.08,0,0,.08,.3,.36,.87,.89,0,.15,.1,0,0,.04,.75,0,0,.25,.18,0,.16,0,0,.1,.17,0,0,0,.74,0,0,0,.21,.24,.16,.67,0,.15,0,0,.28,.01,.01,.21,.2,.02,.2,0,0,.97,.18,.19,.35,.45,.28,.95,0,.66,.52,0,0,0,.56,.27,.27,.2,0,.02,.02,.02,.5,.5,.61,0,0,.18,.25,0,0,0,0,0,0,.08,0,.22,.69,0,0,.26,0,.63,0,.15,.53,.11,0,0,.38,.24,0,.02,.08,0,.56,.19,0,0,0,0,0,0,0,0,.68,.13,0,0,0,.39,0,.01,0,0,.78,.15,.68,.38,0,.89,0,0,0,0,.06,.69,.36,0,.73,0,0,.81,0,0,.41,.26,0,0,.63,0,.26,0,0,0,.17,.13,.55,0,.01,0,0,.91,.39,0,.08,0,0,.62,.24,0,.09,.14,.01,0,0,0,.1,.38,0,0,0,0,.79,0,.77,.06,.32,.29,.46,.15,0,.73,0,.68,.31,0,.86,0,0,.93,0,.98,.47,.07,.04,.85,.91,.16,0,0,.08,.5,.12,.33,.18,.35,.3,.9,.16,0,.21,.58,0,0,0,0,.23,0,.23,0,.36,0,.93,.06,.02,.22,.02,.26,.77,.09,.99,0,0,.97,.02,0,0,.07,0,.16,.01,.47,.02,0,.29,0,0,0,0,.51,0,.03,.29,.97,0,.03,0,0,0,0,.46,0,0,0,.22,0,.53,.34,.33,.05,.61,.69,0,.62,.85,.05,.58,0,0,.83,.52,.13,.63,.12,.74,.96,.3,.02,.12,0,0,.11,0,.01,.33,0,0,0,.22,0,.17,.4,0,.04,.04,.06,0,.01,0,.36,0,.42,0,.85,0,0,.75,0,.27,.1,.85,0,0,0,.19,0,.24,.44,.69,0,0,.01,.39,.22,.4,0,.04,0,0,0,.12,.2,.04,0,0,.47,.01,0,0,0,0,.38,.08,.61,.08,.24,0,0,.03,0,0,0,.42,0,0,.68,.95,.11,0,.68,.37,0,.38,.14,.96,.09,.2,.4,.14,.04,.11,.41,0,0,.25,0,0,.01,.01,.01,0,0,.05,0,.63,0,.98,0,.07,.01,.17,0,0,0,.36,.3,0,0,0,.71,0,.17,.58,.59,.01,0,.36,.84,0,0,.75,0,.49,0,.12,0,0,0,.11,.32,.36,.09,.82,0,.77,.15,0,.73,.08,0,.05,0,.82,.97,0,0,0,.01,.11,.49,.54,.04,.88,0,0,0,.38,0,0,0,0,.07,.01,0,0,0,0,.01,.28,.05,.89,.7,.28,0,.03,0,.38,0,.57,.14,0,.61,.32,.02,0,.34,0,.7,.06,.75,.35,.88,0,.65,.2,.62,.52,.13,.61,.06,.1,0,0,.31,.1,.06,0,.98,.7,0,.99,.88,.98,0,.65,.66,.02,.09,.44,.97,.79,0,0,.75,0,.08,.34,0,.35,.37,.01,0,.26,.35,.15,.24,.25,.04,.64,.61,.54,.8,0,.08,0,0,.46,.84,.01,0,.02,0,0,0,0,0,.94,0,.01,0,0,.14,.45,.3,.9,.51,0,.28,.58,.69,.3,.08,.44,.79,.05,0,0,.66,.94,.01,.92,.18,.74,0,0,0,0,.65,0,0,.11,.83,0,0,0,0,0,.09,.74,0,0,.57,.33,.68,0,.86,.05,.14,0,.67,.35,.11,.59,.68,.92,.78,.01,0,.52,0,.91,0,.48,.13,.4,0,.14,.82,.82,0,.1,.65,.06,0,0,0,.04,.22,.12,.48,0,0,.02,.18,.48,.65,.08,.01,.14,.41,.08,0,0,.38,.01,.03,.88,.97,.88,.81,.23,.64,.67,.29,.94,.23,.17,.5,.02,.22,.62,.56,0,.35,.68,.21,.03,0,0,.03,.15,0,.19,0,0,.25,.33,0,.42,.19,.58,.34,.57,.01,.08,.38,0,0,.07,0,.57,.41,0,.07,.59,.61,.26,.23,.01,.41,0,.57,0,0,.74,0,.01,0,.79,.41,0,.94,.91,.27,0,.35,.03,.53,.04,0,.18,.02,.42,0,0,.88,0,0,.41,0,0,.88,.15,.72,.96,.07,.03,.39,.01,.19,0,.36,0,0,.14,0,0,.02,.46,0,0,0,0,0,.01,0,0,0,.7,0,.78,.2,.03,.02,.94,.29,.17,.15,0,.27,0,.03,0,.08,.16,0,.39,.06,0,.34,.46,.15,0,0,.01,.27,0,0,.07,.85,.01,0,.35,.48,0,0,.59,0,0,0,.05,.83,0,.15,0,.14,.72,.58,.45,.27,.49,0,0,.38,.86,0,0,0,0,0,0,.71,.09,0,.11,0,.04,0,.25,0,.44,.12,.14,.43,.01,0,.54,0,0,.34,0,.47,0,0,.57,0,.72,.09,0,0,0,.38,0,.72,0,.09,0,.05,0,0,.11,0,.28,.03,.02,0,.43,.13,0,0,.44,.46,0,0,.58,.8,.03,.8,.7,.05,.29,.99,0,0,.07,0,0,0,.87,.95,.59,0,0,0,.58,.71,.51,.71,.02,0,.53,0,.03,.67,.11,.2,.55,0,.01,.01,0,0,0,.41,.03,.39,.05,.28,.62,.19,.81,0,.48,0,.12,.74,0,0,.01,.21,.32,0,.78,0,.25,.13,.99,0,.27,.74,.23,.13,0,0,0,.04,.82,.89,0,0,0,0,0,.31,.53,.04,0,.16,.07,0,.62,.01,0,0,0,.77,.04,.11,0,0,.85,.13,.48,.03,0,.95,.47,0,0,0,.37,.67,0,.01,0,.74,.02,0,.98,.74,0,.02,.01,.01,0,.81,.68,.12,0,.44,.56,.08,.59,0,0,.55,.19,.43,.03,.78,.83,0,0,.45,.07,0,.41,0,.06,.84,0,0,.84,.6,0,.13,.03,0,0,.02,0,.36,.01,.13,.79,.35,.03,.15,.71,0,0,.44,0,.03,0,0,0,.12,.28,0,.01,.94,.71,.05,0,0,0,.4,.02,0,.32,0,0,.45,.8,.81,0,.94,.54,.01,.36,0,.3,.93,.35,.18,.39,0,.1,.82,0,.14,.32,0,.01,0,0,.49,.03,.01,.39,0,0,0,0,.83,.06,.77,.18,.52,.01,0,.06,.13,0,0,0,0,.98,.88,.87,.35,.97,.01,.24,0,0,0,.41,.12,0,.24,.15,0,.81,0,.08,0,0,0,.1,.88,.01,.23,0,.17,0,0,.06,.37,0,.01,0,0,.84,.66,0,.48,.78,.5,0,.87,.39,0,.06,0,0,0,.01,.44,0,0,.03,.29,0,.15,.08,0,.03,0,0,.33,.07,0,.02,.56,0,0,.15,.03,.54,.6,0,.57,.02,0,.19,.19,0,0,0,0,.36,0,0,0,0,.07,.86,0,.62,0,.74,0,0,.72,.1,0,0,0,0,.3,.02,0,0,.01,.94,0,.01,0,.22,0,0,0,0,.98,0,.55,.58,0,0,.01,.94,0,0,0,.19,.02,0,0,0,0,.71,.48,.58,.3,.94,0,.85,.55,0,.15,0,0,.13,0,0,.03,.48,0,.28,0,0,.03,.16,0,0,0,0,.01,0,.2,0,0,0,.43,.98,.6,.37,.55,0,0,.08,0,.18,0,.98,.95,0,0,0,0,0,.83,.83,.41,.06,.01,.99,.14,0,0,0,.2,0,.83,.54,.01,.63,0,.23,.16,0,0,0,0,.81,0,0,0,0,0,0,.08,0,0,.02,0,.09,0,0,.37,0,.09,.83,0,.24,.13,0,.06,.01,.48,.75,.22,.97,.92,0,0,0,.3,0,0,0,0,0,0,.37,.02,.65,0,.99,0,.06,.05,.01,.4,0,0,0,.08,0,0,.56,0,.22,0,0,.01,0,.97,.65,.61,.84,.06,0,0,0,.07,0,.07,0,.94,.56,.02,.55,0,.24,0,0,0,0,.62,0,0,0,.72,.05,.12,0,0,.17,.45,0,.39,0,.29,.32,.03,.2,0,0,.09,0,0,.02,0,0,.24,0,.47,0,0,0,0,.61,0,0,0,0,0,.05,0,0,0,0,0,0,.14,0,0,0,.38,.85,.83,.68,0,.42,0,.58,0,0,0,0,0,0,0,.6,0,.11,.03,0,.56,.26,.62,0,0,0,0,.11,0,0,0,.06,.76,.45,.58,.71,.49,0,0,.85,.08,0,.07,0,.01,.23,.92,.46,.1,.14,0,.23,.66,0,.08,.01,0,.01,0,.03,.42,0,.05,.2,0,0,.02,.04,0,.99,0,.46,0,.88,0,.03,.72,0,.08,0,.68,0,.01,.36,0,0,0,0,.02,.2,0,.02,0,.33,.14,.04,0,0,.95,0,0,0,0,.94,0,0,.83,.13,.09,0,0,.58,0,0,0,.65,.79,0,0,.64,0,.8,.82,0,.25,.65,.15,0,0,0,.41,.76,.27,.35,0,0,.1,.9,.05,.65,0,0,0,.09,0,0,0,0,0,.84,.9,0,0,.59,.01,.86,.11,.6,0,0,0,0,.33,.02,0,.24,.41,.54,.82,0,.09,.77,.34,0,0,0,0,0,.52,0,.07,0,.45,.31,.02,0,0,.59,.02,0,.03,0,.01,0,0,0,.06,.64,0,0,0,0,0,.08,0,.01,0,0,.47,0,0,0,.01,0,0,0,.14,0,0,0,.54,0,0,0,0,0,.01,0,0,.05,0,0,1,0,0,.97,0,0,0,0,.35,.69,.1,.07,0,.81,0,0,0,.29,.92,.43,.72,.52,.38,.01,.94,.09,0,.6,.49,0];export{a as pvalData};
