const a=[0,0,0,.38,0,.45,0,.04,.01,.44,0,.61,.96,0,0,.69,.01,.55,.12,.55,.9,.02,.45,0,0,0,.21,.65,.01,.77,0,.08,0,.92,.17,.07,0,0,0,0,.93,0,0,.63,.56,0,.27,.04,.95,.06,.01,.47,0,0,.03,0,.01,.82,.01,0,.03,0,0,.15,.38,.19,0,0,.85,.95,.79,0,.02,.1,0,.5,.57,.15,0,.49,0,0,.95,0,.04,.22,0,.58,0,0,.77,.55,.1,0,.85,.28,0,.23,.02,.02,.09,0,0,.07,0,.39,.31,.01,0,0,.65,.16,.84,0,.05,0,0,.01,0,0,.84,.22,.11,.05,.07,0,0,0,.07,0,.04,0,.54,.57,.01,.25,.11,.01,.29,.66,0,.64,0,0,.85,.25,.69,.09,0,.06,0,.92,.32,.73,.07,.12,.64,.66,.2,0,0,0,.68,.17,.07,.45,0,.02,.34,0,.55,.03,.13,0,0,.89,.76,.66,.24,0,.82,.45,.87,0,0,.89,.3,.38,.53,0,.57,.76,.17,0,0,0,0,0,.99,.01,0,0,0,.71,0,0,.13,.07,.08,.54,.09,0,.49,0,.89,.03,.52,.65,.54,.51,0,0,0,0,0,0,.18,.12,.15,.16,.45,.21,0,0,.09,.83,0,.02,.57,.16,.3,0,.01,0,.33,.07,.07,.4,.39,.35,.37,0,.03,.51,0,.83,.29,0,.89,0,.1,.18,0,0,.25,0,.22,0,.99,0,.8,0,0,0,0,.99,.28,.34,0,.91,.34,.77,0,0,.12,0,.59,0,.27,.38,.03,.53,0,.16,.53,0,.04,.02,.42,0,.76,0,.11,.6,.57,0,.74,0,.44,.02,0,.39,.76,.84,.13,0,.01,.46,0,.01,0,.22,0,0,.8,.13,0,.08,.32,.04,0,0,.28,.4,0,.46,.11,0,0,.07,0,0,.06,.53,0,0,.43,.48,.01,.98,0,0,.58,.12,0,0,.12,.55,0,0,0,.2,.44,.06,.25,0,.71,0,.43,.16,.18,.01,0,.16,.33,.23,.74,0,.89,.62,.63,.42,.2,.18,.85,.01,.52,.99,0,0,0,.99,.25,.36,.22,0,0,.64,.09,.12,.08,.79,0,0,.68,.16,0,0,0,0,0,0,0,0,.44,.57,0,0,.35,0,.88,0,.07,.48,.01,0,0,.54,.56,0,.01,.11,0,.38,.91,0,.01,0,0,0,0,0,0,.86,.01,.01,0,0,.83,0,.01,0,0,.6,.61,.08,.74,0,.55,0,0,0,0,.29,.89,.26,0,.04,0,0,0,0,0,.8,.97,0,0,.14,0,.36,0,0,0,.01,.07,.93,0,0,.01,0,.28,.68,.78,0,0,0,.86,.92,0,0,.34,.46,0,0,0,.04,.07,0,0,.12,0,.46,0,.78,.03,.36,.17,.76,.65,0,.44,0,.69,.77,0,.5,.17,.05,.27,0,.43,.99,.15,.08,.49,.54,.17,.01,0,.33,.3,.91,.49,.09,0,0,.75,.04,0,.94,.76,0,0,0,0,.3,0,0,.17,.58,0,.57,.64,.22,.75,.44,.4,.52,.2,.36,0,0,.01,0,0,0,.55,0,.66,.04,.01,.59,0,.62,0,0,0,0,.04,0,.49,.11,.32,0,.2,0,0,0,.02,.61,0,0,0,.32,0,.19,.06,0,.11,.74,.14,0,.31,.82,.35,.58,0,.05,.5,.63,.75,0,.37,.41,.4,.04,.51,.65,0,.06,.98,0,0,.44,0,0,0,.02,.1,.24,.58,0,0,.52,0,0,0,0,.12,0,.2,0,.17,0,0,.79,0,.49,.07,.84,0,0,0,.57,.01,.2,.19,.66,0,0,0,.85,.29,.66,0,0,0,0,0,.56,.72,.01,0,0,.36,.12,0,0,0,.01,.68,0,.03,.49,.62,.44,.05,.48,0,0,0,.79,0,0,.87,.53,.08,0,.4,.43,0,0,.5,.79,.37,.15,.6,.62,.24,.19,.56,0,0,.83,0,0,0,.03,.02,0,0,.09,0,.18,0,.05,0,.14,.95,.86,0,0,.01,.16,.99,0,0,0,.23,0,.26,.84,.07,.28,0,.17,.79,0,0,.54,0,.11,0,0,0,0,0,.16,.54,.78,0,.78,0,.87,.82,0,0,.22,0,.58,0,.13,.71,0,0,0,.01,.54,.89,.15,0,.12,0,0,0,.08,0,0,0,0,.91,0,0,0,0,0,.03,0,.56,.75,.86,.05,0,0,0,.09,0,.33,.32,0,.6,.18,.13,0,.66,0,.29,.13,.19,.78,.22,0,.68,.04,.43,.98,.63,.26,.05,.04,0,0,.97,.01,.28,0,0,.01,0,.72,.35,.22,0,.26,.92,.39,.47,.35,.17,.53,0,0,.62,0,.01,.01,0,.98,.1,0,0,1,.87,.83,.09,.42,.07,.3,.45,.83,.47,0,.96,0,0,.98,.44,0,0,.12,0,0,0,.01,0,.74,0,.07,0,0,.05,.32,.78,.53,.49,0,.39,.25,.68,.03,.53,.19,.68,0,0,.52,.51,.01,0,.83,.1,.98,0,0,0,0,.82,0,0,.88,.85,0,0,0,0,0,.07,.25,0,0,.83,.22,.89,0,.27,.69,.23,0,.14,.45,.03,.48,.98,.92,.23,.08,0,.1,0,.74,0,.19,.04,.74,0,.48,.53,.52,0,.3,.81,0,0,0,0,.27,.21,.56,.65,0,0,0,0,.96,.99,.05,0,.76,.94,.01,0,.02,.84,.09,.67,.47,.98,.57,.84,.05,.51,.52,.33,.28,.44,.05,.24,.45,.63,.5,.7,0,.76,.38,.49,0,.01,0,0,.11,0,.37,0,.02,.35,.73,0,.46,.17,.29,.01,.89,.11,.08,.9,0,0,.09,0,.86,.02,0,.42,.18,.93,.97,.8,.01,.03,0,.97,0,.01,.81,.02,.43,.03,.92,.21,0,.67,.34,.55,0,.67,.06,.05,0,0,.72,.76,.44,.03,0,.67,0,0,.03,0,0,.67,.08,.51,.64,.34,.27,.16,.01,.02,0,.04,0,0,.02,0,0,.15,.55,0,0,0,.04,0,0,0,0,0,.29,0,.99,.37,.1,.09,.82,.19,.43,.01,0,.48,0,.01,0,.12,.04,.01,.56,.43,0,.38,.74,.01,0,0,.05,.31,0,0,.02,.74,.03,0,.75,.56,.01,0,.71,0,0,0,.12,.21,0,.25,0,.43,.75,.79,.94,.95,.69,0,0,.12,.29,0,.34,0,0,0,.02,.71,.71,0,.09,0,.12,0,.56,0,.63,.01,.11,.66,.13,.01,.31,0,0,.71,0,.44,0,0,.31,0,.35,.01,0,0,0,0,0,.49,0,.19,0,.01,0,0,.23,0,.3,.29,0,0,.31,.4,0,0,.13,.05,0,0,.74,.92,.93,.77,.56,.61,.19,.34,0,0,.25,0,0,0,1,.49,.62,0,0,0,.2,.92,.17,.46,.01,0,.6,0,.12,.17,.51,.6,.97,0,.02,0,0,0,0,.71,0,.38,0,.06,.06,.06,.82,0,.65,0,0,0,.03,0,0,0,.38,0,.28,0,.78,.23,.2,0,.09,.66,.88,.7,0,0,0,0,.22,.74,0,0,0,0,0,.77,.14,.43,0,.35,0,0,.82,0,0,0,.27,.09,.65,.61,0,0,.7,.05,.2,.01,0,.41,.26,0,0,0,.32,.81,0,0,.03,.76,.36,0,.66,.71,0,.05,.02,.2,0,0,.72,.28,0,.73,.03,.01,.03,0,0,.54,.01,.45,.03,.09,.85,0,0,.58,.1,0,.4,0,.27,.03,.63,0,.52,.15,0,.13,.02,0,0,.2,0,.71,0,.02,.92,.75,0,0,.77,0,0,.53,0,.51,0,0,.01,.01,.37,0,0,.12,.17,.2,0,0,0,.26,.15,0,.02,0,0,.15,.66,.14,0,.63,.35,.2,.57,0,.77,.44,.94,.24,.17,0,.48,.48,0,.37,.84,0,.41,0,0,.27,.03,.25,.57,.2,0,0,0,.52,.15,.64,.02,.38,0,0,0,.04,0,0,0,0,.51,.97,.99,.4,.57,.04,.33,.01,0,.07,.24,0,0,.82,.02,0,.22,0,.01,0,0,0,.91,.9,0,.75,0,.07,0,.01,.95,.85,0,0,0,.04,.18,.3,.03,.54,.86,.1,0,.01,.67,0,.27,0,0,0,.01,.12,0,0,0,.49,.01,.5,.22,0,.05,0,0,.29,.6,.01,0,.17,.09,0,.57,.07,.03,.03,0,.02,0,0,.96,.82,0,0,0,0,.8,0,0,0,0,.01,.5,0,.05,0,.78,0,0,.88,.78,0,0,0,0,.04,.83,0,0,0,.78,0,0,0,.75,0,0,0,0,.96,0,.7,.05,0,0,0,.5,0,0,0,.19,.02,.01,0,0,0,.15,.32,.33,.23,.07,0,.44,.04,0,.7,0,0,0,0,0,.35,.48,0,.03,0,0,.4,.92,0,0,.06,0,0,0,.38,0,.08,0,.76,.4,.71,.41,.15,.01,0,.28,0,.37,0,.36,.54,0,0,0,0,0,.14,.48,.03,.18,0,.48,.02,0,0,0,.19,0,.06,.76,0,.9,0,.11,.04,0,0,0,0,.13,0,0,0,0,0,0,.01,0,0,.64,0,.76,0,0,.73,0,.56,.72,0,.05,.31,0,.03,.16,.48,.04,.8,.11,.96,0,0,0,0,0,0,0,0,0,0,.65,.15,.04,0,.95,0,.55,.07,.02,.09,0,0,0,.13,0,0,.17,0,.12,0,0,.02,0,.63,.43,.21,.29,.24,0,0,0,0,0,.02,0,.51,.96,.01,.91,0,.19,0,0,0,0,.07,0,0,0,.2,.02,.76,0,0,.07,.24,0,.68,0,.41,.78,.1,.92,0,0,.63,0,0,0,0,0,.07,0,.57,0,0,0,0,.12,0,0,0,0,0,.42,0,0,0,0,0,.22,.33,0,0,0,.26,.72,0,.62,0,.46,0,.64,0,0,0,0,0,0,0,.5,0,.31,.06,0,.29,.06,.16,0,0,0,0,.93,0,.11,0,.04,.29,.18,.63,.86,.51,0,0,.78,.14,0,.34,0,.03,0,.02,.56,.09,.01,0,.82,.43,0,.92,.03,0,0,0,.02,.45,0,.46,.02,0,0,0,.55,0,.22,0,.89,0,.6,.03,.05,.41,0,.44,.44,.8,0,.01,.11,0,0,0,0,.06,.76,0,.01,.11,.81,.94,.65,0,0,.85,0,0,.01,.36,.01,0,0,.31,0,0,0,0,.26,.02,0,.18,.14,.83,0,.07,.08,0,.68,.49,0,.83,.79,.21,0,0,0,.39,.5,.01,.5,0,.32,.29,.78,.82,.77,0,0,0,.1,0,0,0,0,0,1,.85,0,0,.48,.11,.77,.47,.11,0,0,0,0,.73,0,0,0,.08,.99,.65,0,.14,.03,.31,0,0,0,0,.01,.29,0,0,.02,.08,.81,.03,0,0,.58,.07,0,.05,0,.05,0,.39,0,.01,.75,0,0,0,0,0,.03,0,.54,0,0,.87,.01,0,0,0,0,0,0,.04,0,0,.02,.67,0,0,0,0,0,0,0,0,.61,0,0,.78,0,0,.64,0,0,0,0,.62,.27,.64,.01,0,.9,0,0,0,.03,.29,.69,.68,.04,.47,0,.18,.1,0,.59,.16,0];export{a as pvalData};
