const a=[.01,0,0,.25,0,.29,.17,.1,0,.67,0,.99,.83,0,0,.63,0,.8,0,.58,.77,.61,.48,0,0,0,.57,.15,.82,.04,.01,.93,0,.34,0,.66,0,0,.18,0,.31,0,.18,.71,.95,0,.04,.84,0,.51,.05,.4,.04,0,.8,0,0,.04,.54,0,.77,0,0,.11,0,.08,0,0,.52,.91,.46,0,.86,.31,0,.23,.42,.55,0,.23,.01,0,.51,0,.39,.56,0,.19,0,0,0,.86,.98,0,.06,.2,0,.77,.07,.74,.99,0,.1,.78,.09,.47,.98,.22,0,0,.93,.82,.39,0,.83,0,.35,.26,.21,0,.56,.96,.08,.41,.08,.06,0,.12,.29,0,0,0,.77,.09,0,.55,0,.92,.13,.18,0,.42,0,0,.35,.38,.57,.02,0,.31,0,.65,.7,.91,0,0,.85,.53,.42,0,0,0,.97,.8,.74,.42,0,.5,.01,0,.61,.55,0,0,0,.01,.84,0,.13,0,.54,.48,.94,0,.05,.4,.09,.36,.01,.05,.07,.24,.45,.01,0,0,0,.14,.61,.86,0,0,0,.45,.01,.22,.02,.31,.38,.43,.01,0,.84,0,.06,.71,.38,.09,.02,.26,.01,.43,.19,0,0,0,0,.19,.45,.43,.25,.8,0,0,.13,.72,0,0,.07,.46,.69,0,0,0,.82,.05,.14,.76,.13,.62,.29,.5,.92,.33,0,.82,.34,0,.67,0,.44,0,0,0,0,.14,.62,0,0,0,.39,.15,0,0,0,.47,0,.5,0,0,.01,.09,0,0,.65,0,.02,0,.06,.17,.51,.15,0,.12,.24,.14,0,.08,.82,.48,.86,0,.59,.31,.83,0,.56,.02,0,0,0,.66,.35,.35,.03,.35,.12,0,0,.71,0,.51,0,0,.03,.4,0,.04,.85,.73,0,0,.27,.42,.51,.46,.11,.41,.72,.96,.37,.07,.01,.11,0,0,.25,.11,.32,.79,0,0,.16,.63,.05,0,.1,.94,0,0,0,.46,.16,.55,.55,0,.6,0,.28,.35,0,0,0,0,.73,.2,.16,0,.72,.03,.06,.75,.4,.9,.98,.03,.82,.76,0,0,0,.62,.58,.77,.87,0,.39,.31,.05,.18,.46,.5,0,0,.14,.45,0,0,0,0,0,0,.02,0,.35,.26,0,0,.02,.04,.91,0,.1,.56,.02,0,0,.88,.15,0,0,0,0,.24,0,0,.09,0,0,0,0,0,0,.35,.4,.68,0,0,.72,.16,.03,.56,0,.48,.84,.07,.06,0,.01,0,0,0,0,.35,.61,.03,.01,.58,0,0,.18,0,0,.24,.01,0,0,.61,0,.11,0,0,0,.29,.49,.22,.41,0,0,0,.12,.85,.43,0,0,0,.03,.68,0,0,.14,.04,0,0,0,.03,0,0,0,.43,0,.48,0,.49,.83,.13,.16,.06,.15,0,.5,0,.87,.51,.33,.66,.3,.41,.31,0,.2,.03,.06,0,.36,.34,.38,.03,0,.39,.6,0,.5,0,.48,.1,.17,0,0,.04,.03,0,0,0,0,.12,.14,0,.47,.51,0,.06,.66,.04,.67,.04,.31,.68,.23,.72,0,0,.02,0,0,0,.46,.12,.15,.25,.48,.09,0,.38,.17,0,0,0,.11,0,.45,.27,.41,0,.06,0,0,0,.99,.95,0,0,0,.84,0,.31,0,.27,.11,.01,.82,0,.39,.27,0,.71,0,.03,.05,.73,.01,.02,.07,.99,.02,.62,.66,.16,0,.03,.87,.55,.16,.19,.01,.37,0,0,0,.83,.28,0,.39,.2,.01,0,0,0,.2,.23,.95,0,.02,0,0,.57,0,.67,.3,.39,0,.1,0,0,.05,.06,.55,.33,0,0,.01,.36,.09,.14,.44,0,0,0,.01,.83,.42,0,0,0,0,.86,0,0,0,.04,.87,.07,0,.08,.02,.2,.02,.13,0,0,0,.62,.12,0,.6,.92,.04,0,.98,.36,0,0,.94,.78,.15,.32,.86,.89,.74,.67,.59,0,0,.56,0,0,.29,1,.28,0,.01,.59,0,.31,.19,0,0,.14,.83,.02,0,0,.38,0,.53,.01,0,0,.25,.48,.77,.06,.87,.99,0,.23,.48,0,0,.14,.45,.39,0,.26,0,0,0,0,.09,.68,0,.01,0,.76,.01,.01,.95,.34,0,.01,0,.63,.94,0,0,0,.52,.38,.07,.13,.87,.06,.01,0,0,.73,0,0,0,.74,.99,.59,.23,0,0,0,.06,.14,.02,.38,.56,.05,0,.72,0,.01,0,.03,.15,0,.37,.06,.03,0,.62,0,.36,.7,.92,.87,.17,0,.03,.09,.06,.36,.65,.69,.04,.32,.14,0,.44,0,.46,0,.08,.21,.32,.41,.86,.09,0,.62,.23,.93,0,.01,.88,.12,0,0,.86,.01,0,0,.03,.71,.16,0,0,.82,.09,.02,0,0,.28,.72,.67,.63,.1,0,.09,0,0,.78,.02,0,0,.02,0,0,0,.81,0,.83,0,0,.03,0,.07,.53,.98,.93,.39,0,.48,0,.37,0,.06,.01,.02,0,0,.25,.61,0,0,.31,0,.63,0,0,0,0,.75,0,0,0,.21,0,0,0,0,0,.47,.51,0,0,.25,.43,.14,0,.57,.07,.31,0,.33,.39,.05,.42,.55,.99,.01,.01,0,.01,0,.85,0,.77,.04,.81,0,.66,.02,.96,0,.11,.14,0,0,0,0,.67,.76,.15,.16,0,0,0,.55,.2,.7,.02,0,.22,.35,.55,.45,0,.09,.01,.34,0,.97,.7,.81,.15,.74,.29,.64,.31,.03,0,.82,.27,.34,.66,.09,.34,.03,.01,.02,0,.04,0,0,.17,0,.07,0,.65,.88,.15,0,.78,.19,.71,0,.07,.62,.98,.51,.08,0,.08,0,.51,.08,0,.25,.36,.71,.01,.46,.02,.37,.04,0,0,.17,.16,0,.66,.02,.17,0,0,.01,.77,.82,0,.03,.58,.35,0,0,.43,.9,.3,.69,0,.32,0,0,.08,.01,0,.85,.66,.89,.14,.36,0,.54,.05,.49,0,.59,0,0,.68,0,0,.04,.82,0,0,.03,.23,0,0,0,0,0,.88,0,.8,.61,.48,.79,.22,.19,.6,.03,0,.56,0,.94,0,.96,.12,.13,.9,.85,0,0,.85,0,0,0,.19,.23,0,0,0,.65,.05,0,.02,.83,.01,0,.24,0,0,0,.91,.65,.21,.12,0,.12,0,.32,.12,.52,.33,0,0,.11,.1,0,.03,0,0,0,.16,.06,.14,0,.56,.1,.41,0,.18,0,.32,0,.34,.53,0,.02,.32,0,0,.46,0,.05,.3,0,.29,0,.96,.29,0,0,0,.51,0,.9,0,.56,0,0,0,0,.01,0,.31,.13,0,0,.14,.93,0,0,.01,.02,0,0,.29,.6,.02,.96,.04,.05,0,.06,0,0,.21,0,0,0,.67,.41,.22,0,0,0,.07,.37,.74,.92,.07,0,.85,0,.21,.06,.01,.1,.43,.44,.08,.01,0,0,0,.83,.02,.04,.98,.5,.37,.65,.54,0,.12,0,0,.47,0,.1,.01,.01,.35,.01,.16,0,.01,.03,.51,0,.07,.44,.37,.01,0,0,.04,0,.26,.84,0,.01,.02,0,.01,.53,.94,.17,0,.33,0,0,.19,.33,0,0,.4,.36,.11,.7,0,0,.35,.8,.05,.01,.01,.02,.03,0,0,.01,.13,.75,0,0,.11,.01,.13,0,.4,.33,0,.17,.02,.68,0,.05,.7,.01,.21,.7,.01,.87,.83,.01,0,.87,.52,.37,.61,.01,.07,0,0,.35,.33,0,.29,.01,.29,.53,.16,.03,.59,.61,0,.28,.52,.03,0,.49,0,.08,.06,.08,.43,.04,.07,.08,.34,.18,0,.13,0,.16,.96,0,0,0,.31,0,.2,0,.02,.12,0,0,0,.39,.91,.23,.16,0,0,.88,.09,.18,0,.3,.67,.39,.48,0,.39,.45,.57,.77,.05,0,.82,.3,0,.5,.44,0,.07,0,0,.53,.21,.78,.91,.14,0,0,0,.84,0,.47,.56,.35,0,.01,.01,.34,0,0,0,0,.07,.29,.72,.38,.02,0,.44,.35,0,.34,.19,.01,0,.01,.8,0,.11,0,.36,0,0,.3,.05,.06,0,.03,.21,.01,0,.58,.95,.12,.81,0,0,.82,.17,.15,.44,.44,.76,.46,0,.8,.63,0,.15,0,.17,0,.5,0,0,0,.11,.05,.84,.71,.5,0,.01,.08,0,0,.01,.49,.19,.24,.21,0,.4,.69,.21,0,0,.52,0,0,.89,.01,0,.23,0,0,0,0,0,0,0,0,.09,0,.55,0,.46,0,0,.5,.01,0,0,0,0,.23,.89,0,0,.65,.01,0,.9,0,.64,0,0,0,0,.4,0,0,.33,.12,0,0,.71,0,0,0,.64,.99,0,0,0,0,.11,.2,.23,.09,.02,0,.03,.35,0,.01,.01,.01,.31,0,0,.44,.79,0,.56,.49,0,0,.84,0,.06,.67,0,.57,0,.14,0,.16,.22,.47,.11,.25,.61,.77,.03,0,.25,0,.54,.92,.12,.06,0,0,0,0,0,0,.28,.15,.49,0,.86,.18,0,.04,0,0,0,0,.44,.4,.14,.02,0,.22,0,0,0,0,.07,0,.42,.01,.18,0,.1,0,0,0,.38,0,.95,0,0,.76,0,.91,.57,0,.48,.84,0,.95,.06,.59,.24,.94,.87,.93,0,0,0,0,0,0,0,0,0,0,.91,.02,.01,0,.36,.1,.94,.41,.75,.57,0,0,0,.65,0,.14,.87,.03,0,0,0,.06,.03,.05,.36,.04,.29,.91,0,0,.01,.01,.32,.68,0,.72,.81,.14,.3,0,.53,0,0,0,0,.32,.02,0,0,.25,.03,.9,0,0,.12,.13,0,.91,0,.99,.56,.69,.3,0,.01,.01,0,0,.03,0,.01,.63,.07,.25,0,0,0,0,0,0,.03,.01,.12,.01,.8,0,0,0,.12,.17,.99,.49,.03,0,0,0,.01,.17,.27,0,.4,.35,.44,0,0,0,0,0,0,0,.99,0,.42,.52,0,0,.61,0,0,0,0,.09,.01,0,.25,0,.61,.5,.35,.59,.29,.38,0,0,.85,.14,0,.01,0,.68,0,.07,.74,.6,.66,0,.97,0,0,0,.77,0,.06,0,.76,.37,0,.14,0,0,.56,0,.25,0,.09,0,.85,0,.27,.87,.23,.59,0,.89,.72,.58,0,.02,.26,0,0,0,0,0,.06,0,.59,.99,.79,.72,.94,0,0,.05,0,0,.11,.26,.75,0,0,.06,0,.23,.35,0,.97,.31,0,0,.77,.57,0,.03,.05,0,0,.92,0,.49,.21,.43,0,.08,0,0,.4,.18,.19,0,.18,.08,.39,.01,.04,0,0,0,.05,0,0,0,0,0,.1,.77,.38,0,0,0,.18,.44,.94,0,0,0,0,.33,0,0,.11,.95,.76,.28,.04,.26,.48,.69,0,0,0,0,.64,.17,.17,0,0,.4,.67,.03,0,0,.7,.54,0,.61,0,0,0,.18,0,.67,.05,0,0,0,0,0,.05,0,.65,0,0,.16,0,0,0,0,0,0,0,.21,0,0,.27,.37,0,0,0,0,0,.01,0,0,.83,0,0,.5,0,0,.41,0,.1,0,0,.05,.49,0,0,0,.52,0,.02,0,.01,.09,.39,.27,.78,.31,.01,0,.9,0,.55,.18,.01];export{a as pvalData};
