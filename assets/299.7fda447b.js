const a=[.09,.98,.75,.78,.93,.03,.04,0,.12,.27,.79,0,.19,.03,.94,.11,.02,.06,.01,.83,.27,.02,.72,.77,.53,.48,0,.86,.09,0,.5,0,.74,.35,.6,.18,.34,.4,.57,.99,.26,.73,.91,.88,.34,.64,.31,.62,.03,.08,.03,.47,.55,.14,.5,.1,.98,.05,.38,.45,.02,.74,.04,.69,0,.01,.32,.94,.15,.46,0,.71,.01,.25,.99,.5,.79,.03,.09,.03,.38,.2,.44,.96,0,0,.68,.8,.92,.08,.14,.4,0,.74,.03,.04,1,.23,0,.02,.85,.16,.5,.56,.17,.09,.69,.52,.7,.39,0,.3,.92,.14,0,.95,.1,.05,.2,.13,.73,0,.06,.85,.61,.1,.91,.55,.1,.59,0,.36,.99,.03,.16,.55,0,.47,.07,.34,.62,.11,.24,.44,.11,.22,.49,.01,.11,.47,.17,0,.53,.36,0,.12,.3,.93,.26,.67,.04,.12,.08,.67,0,.07,.53,.03,.47,.66,.28,.08,0,.18,.55,.05,.53,.01,.01,.82,.63,.03,.88,.51,.36,.58,.12,.03,.02,.17,.34,0,0,.01,.06,.62,.69,.19,.1,0,.02,.04,.52,.01,.52,.7,.76,0,.01,.01,0,.81,.26,.62,.05,.54,.37,0,.02,.07,.26,.86,.99,.31,.77,.56,0,.05,.35,.88,.97,.46,.54,.77,.46,.1,.73,.31,.93,.55,.02,.87,.03,.1,0,0,.42,0,.94,.97,.08,0,.73,.03,.64,.01,.23,.02,.12,.87,.19,.73,0,.55,.98,.57,.32,.56,1,.51,0,.25,.29,.52,.19,0,.02,0,.28,.02,.01,.14,.01,.47,.83,.28,.07,.4,.81,0,.04,.07,.87,.02,.01,.96,.3,.5,0,.05,.7,.54,0,.47,.02,.94,.81,.01,.82,.52,.51,.27,.03,.04,.06,.06,0,.99,.51,.12,.69,0,1,.61,.18,.61,.89,.28,.78,.35,.88,.26,0,.1,0,.3,.01,.18,.16,.13,.02,.33,.25,.17,.6,.78,.41,.01,.6,.26,.09,.01,.16,.98,.58,.04,.07,.75,.94,.87,.44,0,.92,.21,.61,.94,.26,.52,.24,.65,.01,.72,.38,.04,.08,.1,.38,.25,.64,.02,.53,.18,.87,.04,.65,.09,.24,.04,.33,.61,.36,.09,.22,.09,.32,.67,.04,.85,.41,.68,0,.54,.51,.17,.06,.27,.7,.66,.12,.51,.57,.82,.66,.39,.28,.23,.51,.08,.01,.95,.01,.75,.16,.56,.88,.71,.94,.15,.15,.79,.04,.09,.07,.4,0,.5,.03,.78,.83,.07,.17,.54,.3,.33,.01,.03,.67,.98,.15,.18,0,0,.6,.07,.42,.51,0,.52,.27,.14,.29,.72,.29,.04,.05,.53,.34,.17,.37,.15,.84,.63,.05,0,.02,.57,.07,0,.47,0,.15,.54,.85,.01,0,.53,.21,.2,0,.63,.25,0,.23,.5,.4,.93,.07,1,.94,.86,.24,.38,.32,.93,.64,.54,.14,.27,.33,.02,.17,.28,.47,.93,0,0,0,0,.03,.57,.04,.97,.1,.89,.64,.55,.57,.81,.4,.52,0,.04,.4,0,.41,.18,.77,.22,.95,0,.54,.9,.01,0,.07,0,.24,.01,.67,.44,.08,.55,.55,.5,.19,.75,.13,.62,.3,.37,.09,.02,.82,0,.99,.34,.31,.46,.01,.86,.74,.78,.01,.13,.95,.83,.44,.01,.03,.61,.07,.31,.26,.52,.05,.74,.76,.52,.34,.4,.36,.79,.2,.45,0,.49,.24,.87,.06,0,.77,.62,.96,.03,.64,0,.92,.19,.1,.07,.84,.34,.55,0,.44,.04,.68,0,.92,.24,.65,.22,.71,.92,.59,.05,.07,.33,.32,.01,.03,.8,.67,.01,.55,.21,.8,.01,0,0,0,.71,.04,.8,.11,.5,.63,.58,.06,.05,.32,.75,.05,.77,.37,.7,.42,.81,.09,.88,.57,.47,.55,.16,.44,.49,.55,.89,.23,.22,.12,.72,.48,.01,.23,.44,.19,.95,.14,.14,0,.75,.14,.72,.27,0,.66,.65,.54,.01,.81,.31,.77,.01,.51,.03,.13,.03,.99,.47,.97,0,.02,.55,.8,.38,.42,.39,.04,0,.14,.16,.35,.04,0,.97,.54,.28,.97,.29,0,.17,.25,.36,.42,.24,.18,0,.17,.86,.28,.82,.79,.67,.01,.02,.59,.66,.87,.66,.98,.63,.17,0,.81,.04,.15,.58,.47,.01,.03,.13,0,.87,.08,.36,.37,.13,.96,.89,.12,.05,.73,.4,.02,.41,.26,.07,.03,.18,.66,.54,.99,.01,.03,.99,.04,0,.89,.14,.96,0,.48,.41,.56,.2,.36,.02,.35,0,0,.08,.29,.97,.89,.05,.92,.32,.4,.62,.3,.49,.89,.2,.03,.78,0,.62,.28,.36,.74,.41,.41,.01,.21,.19,.67,.01,.26,.61,.83,.57,0,.08,.6,.59,.99,0,.02,.18,.6,.69,.02,0,.01,0,.49,.1,.19,.01,.55,.59,.03,.13,.63,.13,.8,.09,0,.83,.91,.08,.05,.85,.5,.66,.22,.72,0,.13,.04,.65,.37,.18,.65,.35,0,.01,.81,0,.3,.35,.09,.03,.66,.43,.17,.89,.88,.23,0,.05,.84,.64,.56,.26,.08,.18,.48,.01,.81,.18,.44,.01,.69,.59,.13,.46,.44,.51,.33,0,.37,.79,.31,.96,.51,.06,.09,.03,.1,0,.04,.79,.43,.64,.08,.29,.06,.24,.83,.34,.65,.63,.45,.9,.12,.78,.79,.66,0,.59,.51,.79,.2,.73,.01,.26,.2,.72,.16,.44,.4,.94,.96,.81,0,.25,.22,.61,.02,.54,.09,.22,.01,.87,.69,.01,.89,.91,.89,.09,.07,.75,.9,.93,.73,.08,.85,.01,.03,.61,.76,.54,.94,.11,.02,.62,.02,.23,.63,0,.01,0,0,.05,.56,.05,.15,0,.03,0,0,.01,.41,.07,.07,0,.23,.03,.11,.69,.61,.74,.75,.13,.02,.35,.69,.38,.06,.03,.29,0,.06,.18,0,.45,.57,.35,.72,.3,.2,.69,0,.9,.16,.05,.01,.14,.07,.7,.33,.95,.14,.08,.82,.05,.39,.32,.09,.73,0,.03,.1,.05,.6,.9,.04,.64,.02,.01,0,0,.24,.04,.7,.73,.84,.76,.01,.13,.08,.81,.01,.26,.01,.01,.57,.83,.13,.04,.13,.78,.44,.25,.32,.43,.81,.79,.26,0,.16,.14,0,.01,.27,.04,.01,.47,.94,.01,.26,0,.47,.1,.01,.15,.33,.67,0,.57,.02,.2,.42,.11,.91,.98,.77,.69,0,0,.01,.88,0,.02,.01,.81,0,.99,.01,.96,.91,.01,.17,.03,.09,.9,.23,.29,.03,.9,.75,.12,.35,.86,.46,.74,.04,.56,.65,.44,.48,.3,.28,.07,.9,.71,.62,.03,.24,.7,.01,.6,.24,.11,.07,.05,.21,.33,.08,.48,.56,.08,.75,.9,.53,.82,.07,.06,.01,.17,.44,.7,.24,.02,.69,.71,.84,.98,.4,.15,.83,.01,.9,.13,.99,.84,.1,.93,.06,.01,.12,.02,.58,.68,.55,.13,.13,0,.11,.24,0,.4,.37,.19,.64,.77,.82,0,.73,1,.88,.05,.39,.75,.65,.94,.78,.53,.3,.7,.09,.07,.17,.06,.01,.01,.69,.35,.01,.11,.08,.92,.86,0,.81,.32,.1,.12,.93,.72,.84,.24,.07,.06,.26,.65,.52,.06,.37,.01,.63,.14,.57,.18,.03,0,.01,.25,.61,.65,.18,.01,.08,.02,0,.02,0,.13,.42,.54,.1,.15,.28,0,.4,.27,.15,.04,.15,.03,.17,.03,.79,.46,.71,.38,.05,.05,.53,.81,.34,0,.29,.17,.5,.34,.34,0,.75,.08,.21,.69,.05,.98,.01,.8,.67,.03,.02,.53,.23,.99,.07,.81,.02,.07,.86,.42,.47,.66,.01,.3,.13,.35,.69,.55,.18,.02,.21,.8,.14,.81,.05,.03,0,.48,.38,.07,.01,.16,.63,.37,.02,.97,.63,.04,.01,.48,0,0,.01,.08,.15,.01,.05,.02,.64,0,.02,.06,.03,.05,.04,.02,.01,.04,.23,.92,.9,.06,.07,.21,.37,.22,.1,.24,.52,.07,.96,.03,.02,.24,0,.03,.68,.94,.01,.1,0,.09,.15,.02,.49,.61,.16,.27,.97,.79,0,.97,.94,.75,.23,.76,.17,.01,.01,.2,.4,.8,.31,.01,.14,.36,.22,.71,.05,.06,.88,.74,.06,.01,.2,.99,.51,.25,.29,.74,.01,.51,.3,.05,.72,.43,.24,.2,0,.22,.12,.46,.06,.48,.36,0,.86,.21,.88,.04,.02,.26,.04,.1,.26,.38,.96,.03,.2,.16,.2,.12,.93,.17,.14,.06,.45,.64,.7,.66,.14,.46,.14,.12,.1,.12,.13,.08,.14,.98,.68,.02,.83,.78,.04,.8,.44,.01,.09,.08,.09,.15,.08,.16,.9,.93,.55,.09,.58,.05,.96,.16,.28,.02,0,.03,.71,.24,.48,.83,.01,.46,.84,.01,.07,.41,.65,.24,.06,.71,.3,.09,.03,.02,.61,.37,.92,.67,.67,0,.93,.17,.02,.71,.05,.71,.25,.77,.01,.82,.82,.04,.23,.09,.85,.46,.75,.01,.77,.75,.7,.83,.25,.09,.09,.22,.71,.57,.88,.19,.79,.69,.22,.85,.35,.01,.93,.03,.82,.19,.57,.55,.16,.71,.08,.04,.01,0,.03,.67,.04,.86,.43,.89,.01,0,.01,.25,.94,.3,.23,.01,.59,0,.77,.05,.54,0,.03,.57,.32,.21,.47,.16,.26,.37,.78,.17,.45,0,.05,.79,.99,.45,.03,.01,.05,.08,0,.27,0,.07,.65,.05,.87,.02,.52,.37,.2,.67,.54,.14,.23,.17,.01,.55,0,.28,.2,.33,.11,.37,.86,.1,.01,.06,.94,.45,.29,.63,.04,.63,.23,.03,.84,.69,.04,0,.05,.01,.27,.73,.7,.36,.62,.74,.55,.01,.02,.01,.71,.04,.94,.04,.13,.4,.09,.81,.45,.01,.77,.6,.55,0,.67,0,.19,.51,.08,0,.38,0,.59,.13,.1,.41,.65,.59,.06,.67,.53,.73,.05,.72,.71,.83,.08,.96,.79,.34,.83,.95,.06,.34,0,.98,.27,.43,.04,.46,.05,.05,.09,.19,.58,0,0,.36,.01,.88,.66,.35,.9,.48,.15,.06,.04,.07,0,.71,.04,.57,.19,.96,.12,.76,.66,.26,.18,.19,.44,0,.71,.03,.04,.74,.83,.71,.91,.73,.01,.51,0,.8,.31,.5,.21,.89,.21,.01,.88,.48,.77,.58,.61,.02,.02,.27,.86,.65,.84,.98,.27,.26,.32,.37,.1,.02,.54,.9,.08,1,.56,.01,.01,.6,.07,0,.88,.17,.63,.02,.95,.97,.37,.75,.09,0,.03,.63,.13,.62,.93,.99,.48,.86,.25,.12,.83,.22,.24,.8,.05,.72,.76,.1,.3,.66,.6,.48,.78,.27,.35,.69,.19,.06,.09,.41,.39,.01,.02,.65,.25,.86,.06,.08,.67,.29,.72,.01,.45,.26,.13,.56,.33,.86,.5,.02,.71,.08,.58,.12,.04,.01,.19,.08,.14,.02,.44,.82,.52,.53,.51,.01,.02,.01,.64,.45,.69,.92,.15,.89,.01,.12,.04,.02,.83,.14,.25,.38,.73,.01,.84,.06,.78,.08,.73,.85,.32,.55,.89,.27,.24,.08,.23,.4,.06,.05,.2,0,.02,.04,.59,.06,.09,.65,.91,.99,.53,.58,.49,.31,.4,.01,.91,.02,.77,.05,.73,.82,.39,.59,.43,.32,.44,.1,.5,.04,.13,.46,.49,.86,.42,.18,.25,.9,.92,.6,.83,.11,.29,.17,.97,.78,.53,.5,.7,.06,.3,.66,.04,.95,.08,.61,.99,.9,.02,.26,.62,.09,.18,.92,.39,.42,.98,.27,.44,.01,0,.58,.2,.55,.44,.05,.17,.28,.91,.44,.61,.81,.8,.95,.13,.4,.21,.62,.94,.27,.11,.29,.89,.52,.98,.39,.06,.04,.35,.55,0,.27,.58,.41,0,.67,.57,.25,.16,.69,.31,.28,.88,.59,.82,.58,.72,.98,.04,.34,.3,.49,.2,.8,.18,.86,.13,.39,.27,.88,.89,.19,.01,.02,.03,0,.61,.44,.89,0,.31,.26,.03,.43,.39,.03,.02,.56,.74,.59,.92,.03,.37,0];export{a as pvalData};
