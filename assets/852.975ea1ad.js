const a=[.24,.87,.35,.69,.35,.39,.03,0,.02,.03,.37,.14,.07,.14,.2,.56,.48,.39,.99,.72,.5,0,.21,.01,.91,.08,0,.76,.79,0,0,0,.42,.42,0,.88,.61,.24,0,.19,.83,.11,.74,.35,.01,.1,.28,0,0,0,.03,.01,.09,.14,0,.4,.89,.06,.71,.11,0,.09,0,.58,0,0,.07,.02,.43,.6,.45,.97,0,.01,.22,.44,0,0,.52,0,.35,.19,.68,.09,.13,0,.17,.54,.09,.56,0,.7,0,.94,.16,.04,.33,0,.06,0,.91,0,0,.95,0,.28,.54,.82,.55,0,.85,0,.01,.27,0,.41,.21,0,0,.17,.17,0,.91,.85,.41,0,.35,0,0,.84,0,.96,.49,0,0,0,0,0,0,.23,.01,.89,0,.19,.58,.97,.64,.16,0,.7,0,0,.99,.8,0,.02,.02,.02,.18,.2,0,0,.45,0,0,0,.37,0,.28,.02,.24,0,0,0,.01,0,.76,0,0,.4,.42,.98,.47,.66,0,.01,.03,.15,0,.09,.94,0,.61,0,0,.75,0,.55,.12,0,.05,0,.78,.23,.34,0,.23,0,0,.02,0,.05,.07,.52,.12,0,.29,0,0,0,.01,0,.04,.36,0,.82,0,0,.01,.01,.14,.73,.46,.31,.71,.3,.07,.22,.1,.91,0,.03,0,0,0,0,.44,.01,.03,.41,0,.01,0,.83,.08,.76,.91,0,.03,.68,.69,.01,0,.02,.66,0,0,.09,.29,.07,0,.66,.78,.05,.2,.2,0,0,0,0,0,0,.22,.67,0,.02,0,.58,0,0,0,0,.2,0,0,.74,.74,0,.08,0,.24,.55,0,.14,.49,.65,0,0,.01,.97,.01,.83,.68,.36,.05,0,0,0,.05,0,.01,.2,.02,.02,0,0,.63,.44,.36,0,.05,.02,.48,.73,0,.33,0,.01,.98,0,0,1,.7,.12,.81,.15,.68,0,.42,0,0,0,.26,0,.73,.19,.01,.02,0,.89,.15,.22,0,.61,.52,.98,.46,.65,0,.51,0,.96,0,.47,0,0,.32,.11,.76,0,.04,.46,.85,.28,.22,.28,.02,.19,.21,.29,.01,.07,.33,.01,.02,.72,0,.94,.88,.53,.04,.09,.02,0,0,.44,.04,.01,0,.2,.03,.23,1,0,.45,.46,.02,.04,0,.32,.8,.64,0,.05,.62,.84,.9,.89,0,0,0,.64,.18,.57,0,.09,.48,.29,.58,0,0,.01,0,.53,0,.02,.67,.07,.05,0,0,0,.04,.63,.96,.49,0,.81,.15,0,.05,.03,.27,0,.8,.3,.75,.97,0,.22,.81,.9,.48,.03,0,.41,.01,0,.69,0,0,.55,.79,0,0,.14,0,.07,.08,.28,.74,.11,.65,.18,.25,.86,0,.71,.18,0,0,.56,.01,.31,0,.77,.3,.43,.6,0,0,.06,0,.03,0,0,.02,0,0,.31,0,.8,.63,.52,.01,.1,.7,.95,.09,.03,0,0,.05,0,.38,.24,0,.53,.86,.2,.85,0,.55,0,0,.73,.43,0,0,.64,0,.83,.12,.46,0,.61,0,0,.46,.32,.06,0,.02,0,.05,.12,.38,.53,0,.58,.02,.31,.04,.32,.55,.7,.69,0,0,.51,0,.2,0,.23,0,.02,.94,0,0,.49,.17,.35,.98,0,0,.07,.01,.35,.11,0,.71,.12,.73,0,.75,0,0,0,.3,.62,.81,.18,.07,0,.03,.78,.83,0,.19,.2,0,.65,.02,.81,0,0,0,.03,.01,0,.1,.25,.36,0,.94,0,.56,0,0,0,.05,.03,0,.47,.46,.05,.28,0,.51,0,.01,0,0,.89,.5,.39,.09,.13,.59,.77,.58,.53,.82,0,.6,.75,.54,.01,.01,.11,0,.1,.9,0,0,0,0,.13,.06,.98,.38,.65,.61,.08,.03,.68,.18,.02,.09,.04,.41,.18,.82,.09,.64,.41,.7,.62,0,.01,.05,0,0,.45,.78,.65,.09,.02,.56,0,.02,0,0,0,.07,.59,.07,.84,.84,.57,0,.08,.51,.51,.5,.09,.34,0,.01,.15,0,0,.38,.06,0,0,.39,.82,.26,.03,.06,.57,0,0,.1,.2,0,.37,.01,0,.02,0,.01,.12,.34,.05,0,0,.83,.27,.87,0,.82,.08,0,.93,.03,.28,.01,.37,.03,0,.21,.31,0,.01,0,0,.98,0,.33,0,.18,.04,.34,0,0,0,0,0,0,.04,0,.05,.26,0,.63,0,.47,0,.05,.08,.06,.01,.42,.01,.01,0,0,.8,.27,.5,.24,0,0,0,.95,0,.26,.94,.03,.4,0,.16,.06,.8,.03,.03,.09,.45,.58,.78,0,.94,.35,0,.21,0,.97,0,.02,.33,.04,0,0,.02,.73,0,0,.18,.26,0,0,.99,.11,.24,.01,0,0,0,0,.26,0,.68,.94,0,0,.06,0,0,.46,.37,.11,0,0,0,.33,0,.23,.6,0,.04,.89,0,.72,0,0,.88,.13,0,0,.43,.15,0,.64,.67,.07,.22,.09,.13,.43,.26,.25,.98,.08,.28,.48,0,.03,0,.79,0,0,.01,0,.87,.6,0,0,.88,0,.06,.21,.93,.12,.26,.93,.63,.63,0,0,.32,.47,.14,.01,.45,0,.19,.01,.24,0,.06,.07,.01,.49,.45,0,.88,.95,.9,0,.71,.18,0,0,.71,.07,.88,.06,.77,.66,.72,0,.58,.01,.57,.08,.22,.02,.88,0,.24,0,.16,.14,.08,.24,.02,0,.15,.11,0,0,0,0,0,0,.15,.05,0,0,0,0,0,.15,0,.66,.87,.35,.93,.5,.84,.85,.4,.52,0,.01,.6,.2,.17,.1,0,0,0,.23,.25,0,.1,.86,.06,.01,.47,.15,0,.41,0,0,.87,.13,.04,0,.95,.26,0,.21,0,.57,0,.77,.9,.01,.94,0,.44,.57,0,.43,.78,.02,.18,0,.02,.1,0,.97,.27,.07,.15,0,.58,0,.01,0,.44,0,0,0,.01,.24,.73,0,0,.02,.87,0,.04,.63,0,.13,.12,.64,0,.85,.74,0,0,.09,.37,0,.02,.97,.29,.08,0,.26,0,0,.07,.2,.58,.09,0,0,.04,.98,.02,.55,.98,.17,.03,.96,0,0,.56,0,.01,.7,.61,0,.48,.04,.09,0,.34,.1,.82,.89,.04,0,.45,0,.14,.39,.49,.53,.51,.11,0,.53,.8,.53,0,.59,.06,.03,.51,.91,.02,.09,.32,.65,0,0,.19,.82,0,.33,0,.61,.36,.28,0,.01,0,.27,.71,.43,.03,0,0,0,.01,.03,0,0,.88,.32,.92,0,.28,0,.99,.01,0,.94,.83,.61,.38,.05,.34,.57,.05,.76,.03,.32,.02,.85,0,.01,.01,0,0,.4,.02,0,0,.38,.52,.29,0,.38,.02,.41,0,.78,0,.3,.03,.08,0,.9,0,.1,.49,.75,0,.36,0,.11,.02,0,0,0,.52,.53,.04,.05,.46,.48,.54,.35,.3,.18,.61,.51,.9,.01,.76,.03,.37,.01,.44,.32,0,.05,.28,0,.03,0,0,.01,.58,.04,.01,0,.01,0,0,0,.04,.22,.92,0,.01,0,0,.81,.01,0,.95,0,.29,.19,0,.86,.1,.87,.26,.59,.42,.02,.15,0,0,.03,0,0,.01,.04,0,.63,0,.03,.12,.31,.04,0,0,.62,.01,0,.89,.95,.01,.8,.58,0,.02,.64,.89,0,.33,.64,.07,0,0,.82,0,.02,0,.54,.11,0,.01,.65,.14,0,.19,.75,0,0,.06,.5,0,.19,.01,.07,0,.02,.45,0,0,.01,0,0,0,0,0,.07,0,.09,.05,.08,.85,.02,.07,0,0,.93,.16,.03,.69,0,.84,0,.11,.35,.36,.08,.89,.06,.63,.37,.14,0,.06,.02,.91,0,0,.21,.01,0,0,.71,0,0,.86,.74,.21,0,.71,.01,.16,.07,.06,.93,0,0,.91,0,.06,.31,.11,.07,.43,0,0,.41,.25,0,.67,0,0,.93,.85,.44,.46,.06,.85,.11,.04,0,0,.01,.14,1,.02,0,.89,0,.05,0,.08,.68,0,.34,.02,.37,.66,.12,.04,.45,.15,.03,.02,.31,0,0,.1,.13,0,.19,0,0,.01,.01,.86,.5,.15,0,.02,.5,0,0,.31,0,.02,0,.29,0,.01,.16,0,0,.23,0,.86,.41,0,.01,.05,0,0,.79,0,.61,.27,.48,.31,.54,0,.03,0,.2,0,.35,0,0,.44,.04,.92,0,0,.3,.52,0,.02,0,.61,0,0,0,0,.73,.7,.02,.44,.9,0,.37,.03,0,.07,0,.86,0,.29,0,.9,.07,0,.01,0,.01,.23,0,0,.01,.15,0,.78,0,0,.16,0,0,.58,.01,0,.38,.01,0,0,0,0,.05,0,0,.03,.05,.02,.15,.01,.45,.04,0,0,0,.06,0,.2,0,.15,0,0,0,.4,.09,.38,0,0,0,0,.01,0,.02,0,.15,.92,0,.23,.47,0,.31,.13,.92,0,.92,0,0,.14,.05,0,0,.09,0,0,0,0,.65,0,.55,0,.16,0,.67,.51,.17,.03,.98,.67,.12,.06,0,.77,0,0,0,0,0,.02,.23,.19,0,0,.34,.9,.82,.01,0,0,.31,0,.31,.18,0,0,0,0,.37,.73,.54,0,.11,0,.93,0,0,0,.55,0,.88,0,0,.69,0,.2,.21,0,.32,.01,.12,0,.05,0,.08,.58,0,0,.74,0,.34,.07,.4,.04,.73,.07,0,0,.01,.73,.06,.09,.66,.06,.14,.82,.08,.44,.01,.93,0,0,0,.95,.37,.08,.48,.54,0,0,0,0,.21,.03,0,.08,.01,.9,.21,.12,.01,.65,0,.06,0,0,0,.05,.25,.06,.87,.96,0,.02,.89,.17,.98,.54,.55,0,.71,0,0,.82,.3,.97,.58,.67,0,.02,.13,.01,.9,.16,.87,.01,0,0,.07,.76,.89,.52,.1,.06,0,0,.38,.16,.93,.15,.91,.91,.1,.94,0,0,.01,.41,.02,.81,.04,0,0,0,.26,0,.1,0,0,0,.81,.35,.06,.74,0,.39,0,.25,0,.15,.99,.79,.09,.14,0,.15,.03,.09,0,.48,.02,.63,.84,0,.01,0,.72,0,.38,.31,.57,.7,.47,.49,.7,.29,0,.02,.23,.27,.12,.73,.17,0,.57,.1,.19,.07,.34,.88,0,.12,0,.92,0,.93,.03,0,.7,.01,.12,0,0,0,.26,.19,.05,.05,.06,.01,.89,0,0,0,.72,.69,.79,.04,.72,.13,.86,.74,0,0,.21,.84,.37,0,0,0,0,.81,.16,.34,.07,.63,.01,.39,.05,.24,0,.43,.11,.03,0,0,0,0,.01,.16,0,.03,.11,.64,.03,.64,.03,.99,.21,0,.18,0,.63,.03,.26,0,0,.09,0,.57,.99,.92,.7,.12,.29,.02,0,.8,.71,.57,.46,0,.65,.93,.76,.07,.28,0,0,0,.07,0,0,.63,.68,.98,.02,.13,0,.62,0,.83,.2,.33,0,.47,.5,0,.01,.19,.41,.06,.87,0,.43,0,.02,0,.82,0,.06,.63,0,0,.76,0,.1,0,0,.68,.01,.04,0,.27,0,.05,0,.01,.07,.12,.63,.12,0,.98,.03,.02,0,.02,.83,.15,.05,.96,.13,.42,0,.94,0,0,.12,.53,.16,.3,.65,.04,.02,.01,.24,.14,.13,1,.43,.75,.59,.17,0,.13,.05,0,0,.78,0,0,.33,0,.57,.08,0,.53,0,.42,0,0,.89,0,.09,.58,.97,.47,.69,0];export{a as pvalData};
